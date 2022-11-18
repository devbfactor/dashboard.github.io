import React from 'react';

import { Header } from '../components';
import CalendarApp from '../components/Calendar/CalendarApp';

const Calendar = () => {

  return (
    <div className="flex justify-start 2xl:justify-center overflow-auto">
      <div className="mt-20 md:m-10 mx-10 md:p-10 bg-white rounded-3xl w-full dark:bg-main-dark-bg">
        <Header category="App" title="Calendar" />
        <CalendarApp />
      </div>
    </div>
  )
}

export default Calendar