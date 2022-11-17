import React, { useState } from 'react';

import { Header } from '../components';
import CalendarApp from '../components/Calendar/CalendarApp';

const Calendar = () => {
  return (
    <div className="flex justify-start 2xl:justify-center overflow-auto w-full">
      <div className="mx-10 mt-20 md:m-10 p-10 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg w-full">
        <Header category="App" title="Calendar" />
        <CalendarApp />
      </div>
    </div>
  )
}

export default Calendar