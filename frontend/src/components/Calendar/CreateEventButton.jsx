import React from 'react';
import { FiPlus } from 'react-icons/fi';


const CreateEventButton = () => {
  return (
    <button className="border py-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
        <FiPlus className="ml-7 w-5 h-5" />
        <span className="ml-2 pr-7">Create</span>  
    </button>
  )
}

export default CreateEventButton