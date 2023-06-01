import React, { useState } from 'react'
import {BsTrash} from "react-icons/bs";
import {MdDoneAll} from "react-icons/md"

const Tasks = (props) => {
    const [done, setDone] = useState(false);

  return (
    <div className= 'flex select-none justify-between items-center cursor-pointer w-full border-b p-3'>
      <div>
        <span className='px-2 text-sm text-slate-400'>
          {props.time}
        </span>

        <span className={`${done === true ? 'line-through text-green-500' : ''} text-md`}>
          {props.task}
        </span>
      </div>  

      <div className='flex px-3'>
        <MdDoneAll onClick={() => setDone(!done)} className='cursor-pointer text-green-500 mr-3' />
        <BsTrash onClick={() => props.removeHandler(props.id)} className='cursor-pointer text-red-500 ml-3' />
      </div>
    </div>
  )
}

export default Tasks
