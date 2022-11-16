import React from 'react'
import { employeeTableRow, paragStyle } from '../componentLogic'

const RenderEmployees = ({order}) => {
    return order.map((user, index) => {
        return (
        <div key={index} className="flex justify-center flex-nowrap py-2 hover:bg-gray-200 hover:dark:bg-gray-600">
            <span style={{flex: "1", display: "flex", alignItems: "center", height: "75px", width: "200px", justifyContent: "left"}} className={paragStyle}><img src={user.EmployeeImage} alt="product" style={{ width: "50px", borderRadius: "50px", marginLeft: "30px", marginRight: "20px" }} />{user.Name}</span>
            <span style={employeeTableRow} className={paragStyle}>{user.Title}</span>
            <span style={employeeTableRow} className={paragStyle}>{user.Country}</span>
            <span style={employeeTableRow} className={paragStyle}>{user.HireDate}</span>
            <span style={employeeTableRow} className={paragStyle}>{user.ReportsTo}</span>
        </div>
        )
    })
}

export default RenderEmployees