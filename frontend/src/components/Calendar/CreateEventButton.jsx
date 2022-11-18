import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useStateContext } from '../../contexts/ContextProvider';


const CreateEventButton = () => {
  const { setShowEventModal, currentColor } = useStateContext();
  
  return (
    <button onClick={()=> setShowEventModal(true)} className="bg-white py-2 rounded-full flex items-center hover:shadow-lg dark:hover:opacity-100" style={{backgroundColor: currentColor }}>
        <FiPlus className="ml-7 w-5 h-5 text-white"/>
        <span className="ml-2 pr-7 text-white">Create</span>  
    </button>
  )
}

export default CreateEventButton