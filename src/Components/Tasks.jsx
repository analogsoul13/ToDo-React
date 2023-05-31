import React, { useState } from 'react'
import {BsTrash} from "react-icons/bs";
import {MdDoneAll} from "react-icons/md"

const Tasks = () => {
    const {done, setDone} = useState(false);
  return (
    <div onClick={() => setDone(!done)} className={`${done === true ? 'line-through' : ''}flex select-none justify-between cursor-pointer w-full border-b p-3`}>
      <div>
        <span className='px-2 text-sm text-slate-400'>10:00 A.M</span>
        <span>Item</span>
      </div>

      <div className='flex px-3'>
        <MdDoneAll className='cursor-pointer text-green-500 mr-3' />
        <BsTrash className='cursor-pointer text-red-500 ml-3' />
      </div>
    </div>
  )
}

export default Tasks
