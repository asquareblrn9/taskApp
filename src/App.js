import Header from './components/Header'
import Tasks from './components/Tasks'
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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
