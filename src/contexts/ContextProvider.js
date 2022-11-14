import React, { createContext, useContext, useState } from 'react';
import { ordersData, employeesData, contextMenuItems, ordersGrid } from '../data/dummy';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [posts, setPosts] = useState(ordersData)
    const [employee, setEmployee] = useState(employeesData)

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }

    return (
        <StateContext.Provider
            value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, posts, setPosts, employee, setEmployee}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);