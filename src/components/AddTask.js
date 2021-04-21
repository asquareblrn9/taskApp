import {useState} from 'react'


const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')
    return (
      <form className='add-form'>
          <div className='form-control'>
              <label>Task</label>
              <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
          </div>

          <div className='form-control'>
              <label>Day and Time</label>
              <input type='text' placeholder='date and tim' value={day} onChange={(e) => setText(e.target.value)} />
          </div>

          <div className='form-control form-control-check'>
              <label>Set Reminder</label>
              <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.check)} />
          </div>
          
          <input type="submit" value="Save Task" className='btn btn-work' />
      </form>
    )
}

export default AddTask
