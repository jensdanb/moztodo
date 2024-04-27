import {useState} from "react"; 

function Todo(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);

    function submitEdit(event) {
        event.preventDefault();
        if (newName != "") {
            props.editTask(props.id, newName);
        };
    }

    if (isEditing) {
        return editingTemplate(props);
    } else return viewTemplate(props);
  }

function editingTemplate(pProps) {
    return (
        <form className="todo stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={pProps.id}>
                    New name for {pProps.name}
                </label>
                
                <input 
                    id={pProps.id}
                    className="todo-text"
                    type="text" 
                />
                
            </div>
            
            <div className="btn-group">
                <button type="button" className="btn">
                    Cancel 
                    <span className="visually-hidden">renaming {pProps.name}</span>
                </button>
                
                <button type="submit" className="btn btn__primary todo-edit">
                    Save 
                    <span className="visually-hidden">new name for {pProps.name}</span>
                </button>
            </div>
        
        </form>
        );
}

function viewTemplate(pProps) {
    return (
        <div className="todo stack-small">
            <div className="c-cb">
            <input 
                id={pProps.id} 
                type="checkbox" 
                defaultChecked={pProps.completed} 
                onChange={() => pProps.toggleTaskCompleted(pProps.id)}
            />
            
            <label className="todo-label" htmlFor={pProps.id}>
                {pProps.name}
            </label>
            </div>
            
            <div className="btn-group">
            
            <button type="button" className="btn">
                Edit 
                <span className="visually-hidden">{pProps.name}</span>
            </button>
            
            <button 
                type="button" 
                className="btn btn__danger" 
                onClick={() => pProps.deleteTask(pProps.id)}
                >
                Delete 
                <span className="visually-hidden">{pProps.name}</span>
            </button>
            </div>
        
        </div>
        );
}

  
export default Todo;
  