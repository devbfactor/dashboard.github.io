import React from 'react';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { tableRowStyle, paragStyle } from '../components/table';

const Orders = () => {
  return (
    <div className="flex lg:justify-center justify-start overflow-auto">
      <div className="mx-2 mt-14 md:m-10 p-10 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Orders" />
        <table>
          <thead className="flex flex-nowrap lg:justify-center justify-start border-gray-200 border-1 py-3">
            {ordersGrid.map((item, index) => (
              <tr key={index} className="flex flex-nowrap">
                <td width={"200px"}>
                  <p  className="text-gray-500 text-base text-center">{item.headerText}</p>
                </td>
              </tr> 
            ))}
          </thead>
        <tbody>
        {ordersData.map((item, index)=> (
        <tr key={index} className="flex flex-nowrap py-2 hover:bg-gray-200">
          <td style={tableRowStyle}><img src={item.ProductImage} alt="product" style={{width: "75px"}}/></td>
          <td style={tableRowStyle} className={paragStyle}>{item.OrderItems}</td>
          <td style={tableRowStyle} className={paragStyle}>{item.CustomerName}</td>
          <td style={tableRowStyle} className={paragStyle}>${item.TotalAmount}</td>
          <td style={tableRowStyle} className={paragStyle}><span style={{ textTransform: "capitalize", background: item.StatusBg, width: "90px",  padding: "5px 0px", textAlign: "center", color: "#ffffff", borderRadius: "12px" }}>{item.Status}</span></td>
            <td style={tableRowStyle} className={paragStyle}>{item.OrderID}</td>
          <td style={tableRowStyle} className={paragStyle}>{item.Location}</td>
        </tr>
        ))} 
        </tbody>
      </table>
      </div>
      </div>
  )
}

export default Orders