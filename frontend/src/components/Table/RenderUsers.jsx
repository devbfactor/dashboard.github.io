import React from 'react'
import { tableRowStyle, paragStyle } from '../componentLogic';

const RenderUsers = ({order}) => {
    return order.map((user, index) => {
      return (
        <div key={index} className="flex flex-nowrap py-2 hover:bg-gray-200 hover:dark:bg-gray-600">
                <span style={tableRowStyle}><img src={user.ProductImage} alt="product" style={{ width: "75px", height: "75px", borderRadius: "50%", padding: "2px" }} /></span>
                <span style={tableRowStyle} className={paragStyle}>{user.OrderItems}</span>
                <span style={tableRowStyle} className={paragStyle}>{user.CustomerName}</span>
                <span style={tableRowStyle} className={paragStyle}>${user.TotalAmount}</span>
                <span style={tableRowStyle} className={paragStyle}><span style={{ textTransform: "capitalize", background: user.StatusBg, width: "90px", padding: "5px 0px", textAlign: "center", color: "#ffffff", borderRadius: "12px" }}>{user.Status}</span></span>
                <span style={tableRowStyle} className={paragStyle}>{user.OrderID}</span>
                <span style={tableRowStyle} className={paragStyle}>{user.Location}</span>
          </div>
      )
    })
}

export default RenderUsers