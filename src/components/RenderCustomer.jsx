import React from 'react';
import { ordersData } from '../data/dummy';
import {customerTableRow, paragStyle} from './componentLogic';

const RenderCustomer = ({order}) => {
    return order.map((user, index) => {
        return (
            <div key={index} className="flex justify-center flex-nowrap py-2 hover:bg-gray-200">
                
            </div>
        )
    })
}

export default RenderCustomer