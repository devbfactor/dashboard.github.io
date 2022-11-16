import React from 'react';
import {customerTableRow, paragStyle} from '../componentLogic';

const RenderCustomer = ({order}) => {
    return order.map((user, index) => {
        return (
            <div key={index} className="flex justify-center flex-nowrap py-2 hover:bg-gray-200 hover:dark:bg-gray-600">
                <div className="flex justify-center w-20 " style={{alignItems: "center"}}>
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                </div>
                
                <div style={{ flex: "1", display: "flex", alignItems: "center", height: "75px", justifyContent: "left" }} className={paragStyle}>
                    <div>
                        <img src={user.CustomerImage} alt="product" style={{ width: "50px", borderRadius: "50px", marginLeft: "30px", marginRight: "20px" }} />
                    </div>
                    <div className="inline-block text-left">
                        <div>
                            {user.CustomerName}
                        </div>
                        <div>
                            {user.CustomerEmail}
                        </div>
                    </div>
                </div>

                <div style={customerTableRow} className={paragStyle}>
                    {user.ProjectName}
                </div>
                <div style={customerTableRow} className={paragStyle}>
                    <span style={{ textTransform: "capitalize", background: user.StatusBg, width: "90px", padding: "5px 0px", textAlign: "center", color: "#ffffff", borderRadius: "12px" }}>{user.Status}</span>
                </div>
                <div style={customerTableRow} className={paragStyle}>
                    {user.Weeks}
                </div>
                <div style={customerTableRow} className={paragStyle}>
                    {user.Budget}
                </div>
            </div>
        )
    })
}

export default RenderCustomer