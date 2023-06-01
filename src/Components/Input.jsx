import React, { useRef } from 'react'
import {AiOutlinePlus} from "react-icons/ai";

const Input = (props) => {
  const inputBox = useRef();
  return (
    <div className='flex p-3 justify-around'>
      <input type="text" placeholder='Enter Your Tasks Here' className='p-3 mt-5 focus:outline-none border w-[90%] border-slate-400' ref={inputBox} />

      <div onClick={() => {
        props.handler(inputBox.current.value) 
        inputBox.current.value = "" ;}} 
        className='flex justify-center mt-5 cursor-pointer items-center w-12 h-12 shadow-lg bg-blue-400 text-white text-4xl rounded-full'>
        <AiOutlinePlus />
      </div>
    </div>
  )
}

export default Input
