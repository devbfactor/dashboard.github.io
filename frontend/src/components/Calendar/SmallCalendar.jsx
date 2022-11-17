import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from './util';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useStateContext } from '../../contexts/ContextProvider';

const SmallCalendar = () => {
    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useStateContext();
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
            return 'bg-blue-500 rounded-full text-white'
        } else if (currDay === slcDay) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold"
        } else {
            return "";
        }
    }

  return (
    <div>
        <div className="mt-9 ">
            <header className="flex justify-between ">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>
                <div>
                    <button className="cursor-pointer text-gray-600 mx-2" onClick={handlePrevMonth}>
                        <MdOutlineChevronLeft />
                    </button>
                    <button className="material-icons-outlined cursor-pointer text-gray-600" onClick={handleNextMonth}>
                        <MdOutlineChevronRight />
                    </button>
                </div> 
            </header>
        </div>
        <div className="grid grid-cols-7 grid-rows-6">
            {currentMonth[0].map((day, index) => (
                <span key={index} className="text-sm py-1 text-center">
                    {day.format('dd').charAt(0)}
                </span>
            ))}
              {currentMonth.map((row, idx) => (
                <React.Fragment key={idx}>
                    {row.map((day, idx) => (
                        <button key={idx} className={`py-1 w-full ${getDayClass(day)}`}
                            onClick={() => {
                                setSmallCalendarMonth(currentMonthIdx)
                                setDaySelected(day)
                            }}>
                            <span className="text-xs">{day.format("D")}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SmallCalendar