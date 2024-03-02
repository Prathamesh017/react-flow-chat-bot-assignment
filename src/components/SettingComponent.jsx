import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
function SettingComponent({onAddNode,text,showInput,updateNode}) {
  const [input,setInput]=useState("");
   useEffect(()=>{
      setInput(text);
   },[text])
   SettingComponent.propTypes={
    onAddNode: PropTypes.func,
    text:PropTypes.string,
    showInput:PropTypes.bool,
    updateNode:PropTypes.func
  }
  return (
    <>
      <p className='text-center'>Setting</p>
      <div className="flex flex-col justify-center">
         {showInput ?
         <div className=' mt-4 flex flex-col'>
          <input  type="text"  value={input} placeholder='enter text' className='p-2 border border-slate-700 mx-2' onChange={(event)=>{setInput(event.target.value)}}></input>
          <button  className="self-center mt-4 bg-slate-500 p-2 rounded text-white hover:bg-slate-600" onClick={()=>{
             updateNode(input)
          }}>Update Message</button>
         </div>
          : <button
          className="self-center mt-4 bg-slate-500 p-2 rounded text-white hover:bg-slate-600"
          onClick={onAddNode}
        >
          Add New Message Node
        </button>}
      </div>
    </>
  )
  
}


export default SettingComponent
