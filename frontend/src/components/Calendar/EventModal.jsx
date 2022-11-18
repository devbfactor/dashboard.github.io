import React, { useState } from 'react';
import { MdDragHandle, MdClose, MdOutlineSegment, MdBookmarkBorder, MdOutlineCheck } from 'react-icons/md';
import { useStateContext } from '../../contexts/ContextProvider';
import { AiOutlineSchedule } from 'react-icons/ai';

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
    const { setShowEventModal, daySelected} = useStateContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("")
    const [selectedLabel, setSelectedLabel] = useState("indigo")

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-500 px-2 mx-5">
            <header className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <MdDragHandle className="text-gray-400"/>
                  <button onClick={() => setShowEventModal(false)}>
                    <MdClose className="text-gray-400"/>
                </button>
            </header>
            <div className="p-5">
                <div className="grid grid-cols-1/5 items-end gap-y-7">
                    <div className='flex flex-row'>
                        <span className="mr-16"></span>
                        <input type="text" name="title" placeholder="Add Title" value={title} className="pt-3 border-0 text-gray-800 text-xl font-semibold pb-2 w-full border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500" onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className='flex flex-row p-0'>
                        <AiOutlineSchedule className="text-gray-700 text-2xl mr-10" />
                        <p>{daySelected.format("dddd, MMMM DD")}</p>
                    </div>
                    <div className='flex flex-row p-0'>
                        <MdOutlineSegment className="text-gray-700 text-2xl mr-10 mt-3" />
                        <input type="text" name="description" placeholder="Add a description" value={description} className="mb-3 border-0 text-gray-800 pb-2  w-full border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500" onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="flex flex-row">
                        <MdBookmarkBorder className="mr-10"/>
                        <div className="flex gap-x-2">
                          {labelsClasses.map((labelClass, index) => (
                            <span key={index} onClick={()=> setSelectedLabel(labelClass)} className={`bg-${labelClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                {selectedLabel === labelClass && <MdOutlineCheck className="text-white text-sm" />}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex justify-end w-100 border-t p-3 mt-5">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white my-3">
                    Save
                </button>
            </footer>
        </form>
    </div>
  )
}

export default EventModal