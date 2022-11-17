import React from 'react';
import dayjs from 'dayjs';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useStateContext } from '../../contexts/ContextProvider';

function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useStateContext();

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
        <header className="px-4 py-2 flex items-center">
            <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="cursor-pointer text-gray-600 mx-2 text-3xl" >
                    <MdOutlineChevronLeft />
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 text-3xl">
                    <MdOutlineChevronRight />
                </span>
            </button>
            <h2 className="ml-4 text-xl text-gray-500 font-bold">
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}

export default CalendarHeader