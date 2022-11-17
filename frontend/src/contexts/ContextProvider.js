import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ordersData, employeesData, customersData } from '../data/dummy';
import dayjs from 'dayjs';
import SmallCalendar from '../components/Calendar/SmallCalendar';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    monthIndex: 0,
    smallCalendarMonth: 0,
    daySelected: null
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [posts, setPosts] = useState(ordersData);
    const [employee, setEmployee] = useState(employeesData);
    const [customer, setCustomer] = useState(customersData);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);

        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])

    return (
        <StateContext.Provider
            value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, posts, setPosts, employee, setEmployee, customer, setCustomer, currentColor, setCurrentColor, currentMode, setCurrentMode, themeSettings, setThemeSettings, setMode, setColor, monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected, showEventModal, setShowEventModal}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);