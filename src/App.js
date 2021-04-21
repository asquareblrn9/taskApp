import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([
    {
    id:1,
    text: 'Doctor Appointment',
    day: 'Feb 15th at 2:30pm',
    reminder: true,
},

{
    id:2,
    text: 'Church Appointment1',
    day: 'Feb 16th at 2:40pm',
    reminder: true,
},

{
    id:3,
    text: 'Food Pastor',
    day: 'Feb 18th at 7:30pm',
    reminder: false,
},
])

const deletTask =(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
//Add Task
const addtask = (task) =>{

}
//toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>
      task.id === id ? {...task, reminder: !task.reminder} : task
    )

  )
}
  return (
    <div className="container">
     <Header />
     <AddTask />
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deletTask} onToggle={toggleReminder} /> : 'No Task'}
    </div>
  );
}

export default App;
