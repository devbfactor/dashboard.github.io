import dayjs from 'dayjs';
import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const Day = ({ day, rowIndex }) => {
    const { setShowEventModal, setDaySelected, currentColor } = useStateContext();
    
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? currentColor : 'text-black';
    }

    
    
    return (
        <div className="flex flex-col border-white border-1 dark:bg-main-dark-bg dark:border-gray-600 ">
            <header className="flex flex-col items-center">
                {rowIndex === 0 && (<p className="text-sm mt-2 font-bold dark:text-white"> {day.format("ddd").toUpperCase()} </p>)}
                <p className={`text-sm p-1 mt-3 text-center rounded-full px-1.5 text-white ${getCurrentDayClass()} dark:text-white`} style={{backgroundColor: getCurrentDayClass()}}>
                    {day.format("DD")} 
                </p>
            </header>
            <div className="flex-1 cursor-pointer" onClick={() => {
                setDaySelected(day)
                setShowEventModal(true);
            }}>
                {}
            </div>
        </div>
    )
}

export default Day