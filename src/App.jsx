import {useState, useContext, useEffect} from "react"; 
import {nanoid} from "nanoid";

import { SetByServer } from "./network";
import {Todo, Form, FilterButton} from "./components/TodoApp";
import {NavBar} from "./components/Navbar";
import { ThemeContext } from "./styling/theme";
import './styling/index.css'


const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({initialTasks, initialFilter}) {
  // Context
  const { theme } = useContext(ThemeContext);

  // Network refresh
  const [serverStatusMessage, setserverStatusMessage] = useState('not connected');
  SetByServer('hello', setserverStatusMessage)

  // State
  const [tasks, setTasks] = useState(initialTasks);
  const [taskFilter, setTaskFilter] = useState(initialFilter);

  const taskList = tasks
      .filter(FILTER_MAP[taskFilter])
      ?.map((task) => (
          <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              toggleTaskCompleted={toggleTaskCompleted}
              editTask={editTask}
              deleteTask={deleteTask}
          />)
    );
    
    const filterButtons = FILTER_NAMES.map((name) => 
        <FilterButton 
            key={name} 
            name={name}
            isPressed={name === taskFilter}
            setTaskFilter={setTaskFilter}
            />
    );


    // Functions
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }
    
    function toggleTaskCompleted(id) {
        function toggleIfToggled (task) {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else return task;
        }
        const revisedTasks = tasks.map(toggleIfToggled);
        setTasks(revisedTasks);
    }

    function editTask(id, newName) {
        function editIfEdited (task) {
            if (task.id === id) {
                return { ...task, name: newName };
            } else return task;
        }
        const revisedTasks = tasks.map(editIfEdited);
        setTasks(revisedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => task.id !== id);
        setTasks(remainingTasks);
    }

    
    // Visuals
    const headingText = `${tasks.filter(FILTER_MAP["Active"]).length} tasks remaining`;
    
    return (
      <div className={`App ${theme}`}>
          <NavBar/>
          <div className="todoapp">
              <h1>Server {serverStatusMessage}</h1>
              <Form onSubmit={addTask}/>
              <div className="filters btn-group stack-exception">
                  {filterButtons}
              </div>
              <h2 id="list-heading">{headingText}</h2>
              <ul
                  role="list"
                  className="todo-list stack-large stack-exception"
                  aria-labelledby="list-heading">
                  {taskList}
              </ul>
          </div>
        </div>
    );
  }

export default App;
  