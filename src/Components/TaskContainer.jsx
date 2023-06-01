import React from 'react'
import Tasks from './Tasks'

const TaskContainer = (props) => {
  const tasks = props.data.map(
    (singleData,index) => {
    return <Tasks removeHandler={props.removeHandler} key={index} id={index} task={singleData.item} time={singleData.time} />
    }
  )
  return (
    <div className='p-3'>
      {tasks}
      
      {/* <Tasks />
      <Tasks />
      <Tasks /> */}
    </div>
  )
}

export default TaskContainer
