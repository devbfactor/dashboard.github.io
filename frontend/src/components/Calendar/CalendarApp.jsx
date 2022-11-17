import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import CalendarHeader from '../Calendar/CalendarHeader';
import Month from '../Calendar/Month';
import Sidebar from '../Calendar/Sidebar';
import { getMonth } from '../Calendar/util';

const CalendarApp = () => {
    const { monthIndex } = useStateContext();
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex])

    return (
        <React.Fragment>
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CalendarApp