import {useState} from "react"; 
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
    // State
    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks?.map((task) => 
        <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        key={task.id}
        deleteTask={deleteTask}
        />
    );

    // Functions
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }
    
    function toggleTaskCompleted(id) {
        function toggleIfToggled (task) {
            if (task.id == id) {
                return { ...task, completed: !task.completed };
            } else return task;
        }
        const revisedTasks = tasks.map(toggleIfToggled);
        setTasks(revisedTasks);
    }

    function deleteTask(id) {
        console.log(id);

        //const remainingTasks = tasks.filter((task) => task.id !== id);
        //setTasks(remainingTasks);
    }
          
    
    // Visuals
    const headingText = `${taskList.length} tasks remaining`;
    
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form onSubmit={addTask}/>
        <div className="filters btn-group stack-exception">
            <FilterButton />
            <FilterButton />
            <FilterButton />
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">
          {taskList}

        </ul>
      </div>
    );
  }
  
  export default App;
  