import React from 'react';
import dayjs from 'dayjs';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useStateContext } from '../../contexts/ContextProvider';

function CalendarHeader() {
    const { monthIndex, setMonthIndex, currentColor } = useStateContext();

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    const handleReset = () => {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }

    return (
        <header className="flex mb-10">
            <button className="text-white px-4 py-2 md:px-5 md:py-2 rounded-lg mr-5 hover:shadow-lg hover:opacity-100" style={{backgroundColor: currentColor}} onClick={handleReset}>
                Today
            </button>
            <button onClick={handlePrevMonth} className="cursor-pointer text-gray-600 hover:text-gray-800 md:mx-2 dark:text-gray-400 dark:hover:text-white text-2xl" >
                <MdOutlineChevronLeft />
            </button>
            <button onClick={handleNextMonth} className="cursor-pointer text-gray-600 hover:text-gray-800 md:mx-2 dark:text-gray-400 dark:hover:text-white text-2xl">
                <MdOutlineChevronRight />
            </button>
            <h2 className="ml-4 text-black md:text-2xl text-sm font-bold md:mt-1 mt-3 dark:text-white" >
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}

export default CalendarHeader