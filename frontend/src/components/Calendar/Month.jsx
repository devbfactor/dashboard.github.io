import React from 'react'
import Day from './Day'

const Month = ({month}) => {
  return (
    <div className="hidden flex-1 w-50 md:grid grid-cols-7 grid-rows-5 bg-gray-50">
        {month.map((row, index) => (
            <React.Fragment key={index} >
                {row.map((day, idx) => (
                    <Day day={day} key={idx} rowIndex={index} />
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Month