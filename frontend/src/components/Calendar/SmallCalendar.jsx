import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from './util';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useStateContext } from '../../contexts/ContextProvider';

const SmallCalendar = () => {
    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected, currentColor } = useStateContext();
    const [currentMonthIdx, setCurrentMonthIndx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
       setCurrentMonthIndx(monthIndex) 
    }, [monthIndex])
    
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx])

    const handlePrevMonth = () => {
        setCurrentMonthIndx(currentMonthIdx - 1);
    }

    const handleNextMonth = () => {
        setCurrentMonthIndx(currentMonthIdx + 1);
    }

    const getDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return currentColor
        } else if (currDay === slcDay) {
            return "bg-gray-200 rounded-full text-black font-bold dark:text-black"
        } else {
            return "text-black";
        }
    }

  return (
    <div>
        <div className="mt-9">
            <header className="hidden md:flex justify-between px-2 mb-2">
                <p className="text-black font-semibold dark:text-white">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>
                <div>
                    <button className="cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white  mx-2" onClick={handlePrevMonth}>
                        <MdOutlineChevronLeft />
                    </button>
                    <button className="cursor-pointer text-gray-600 hover:text-gray-800 mx-2 dark:text-gray-400 dark:hover:text-white " onClick={handleNextMonth}>
                        <MdOutlineChevronRight />
                    </button>
                </div> 
            </header>
        </div>
        <div className="grid grid-cols-7 grid-rows-6 dark:text-white">
            {currentMonth[0].map((day, index) => (
                <span key={index} className="md:text-sm text-xl py-1 text-center font-bold">
                    {day.format('dd').charAt(0)}
                </span>
            ))}
              {currentMonth.map((row, idx) => (
                <React.Fragment key={idx}>
                    {row.map((day, idx) => (
                        <button key={idx} className={`p-1 w-full text-base rounded-full dark:text-white hover:dark:text-black  text-white hover:bg-gray-200 ${getDayClass(day)}`} style={{backgroundColor: getDayClass(day)}}
                            onClick={() => {
                                setSmallCalendarMonth(currentMonthIdx)
                                setDaySelected(day)
                            }}>
                            <span className="text-sm">{day.format("D")}</span>
                        </button>
                    ))} 
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SmallCalendar