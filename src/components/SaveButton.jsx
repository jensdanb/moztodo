function SaveButton(props) {
    return (
      <button 
        type="button" 
        className="btn toggle-btn" 
        aria-pressed="true"
        // onClick={() => props.setTaskFilter(props.name)}
        >
        <span className="visually-hidden">Save tasks</span>
      </button>
    );
  }
  
  export default SaveButton;