import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import TaskContainer from './Components/TaskContainer';

function App() {
  const [todos, setTodo] = useState([]);

  const removeTask = (id) => {
    //console.log(id);
    const newTodos = todos.filter(
      (d, index) =>{
          if(index !== id){
            return true;
          }else{
            return false;
          }
      }
    )
    setTodo(newTodos); //state updated

  }

  const addToDoHandler = (item) => {
    //console.log(item);
    setTodo(
      [...todos,
        {
        item,
        time: new Date().toLocaleTimeString()
        }
      ]
    )

  }

  return (
    <div className='bg-black h-screen'>
      <div className='flex justify-center p-4'>
        <p className='text-blue-100 text-3xl font-bold'>Get Things Done !</p>
      </div>
      <div className='mx-auto rounded-xl shadow-2xl shadow-blue-400 max-w-[750px] min-h-[550px] bg-white'>
        <Input handler={addToDoHandler} />
        <TaskContainer data={todos} removeHandler={removeTask} />
      </div>
      <div className='flex justify-center p-2'>
        <a href='https://github.com/analogsoul13' className='text-sm text-gray-400'>analogsoul13</a>
      </div>
    </div>
  );
}

export default App;
