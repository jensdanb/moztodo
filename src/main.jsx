import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./styling/theme.jsx";


// Load UI data


// Load app data
const initialTasks = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];


//Serve React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App 
        initialTasks={initialTasks} 
        initialFilter={"All"}
        />
    </ThemeProvider>
  </React.StrictMode>,
)
