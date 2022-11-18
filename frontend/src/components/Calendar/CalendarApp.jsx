import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import CalendarHeader from '../Calendar/CalendarHeader';
import Month from '../Calendar/Month';
import Sidebar from '../Calendar/Sidebar';
import { getMonth } from '../Calendar/util';
import EventModal from './EventModal';
const CalendarApp = () => {
    const { monthIndex, showEventModal } = useStateContext();
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex])

    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar/>
                    <Month month={currentMonth}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CalendarApp