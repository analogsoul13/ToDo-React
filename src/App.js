import './App.css';
import Input from './Components/Input';
import TaskContainer from './Components/TaskContainer';

function App() {
  return (
    <div className='bg-black h-screen'>
      <div className='flex justify-center p-4'>
        <p className='text-blue-100 text-3xl font-bold'>Get Things Done !</p>
      </div>
      <div className='mx-auto rounded-xl shadow-2xl shadow-blue-400 max-w-[750px] min-h-[550px] bg-white'>
        <Input />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
