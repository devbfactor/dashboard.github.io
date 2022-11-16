import React, { useState } from 'react';
import { arrowStyle, employeeRowStyle } from '../componentLogic';
import { useStateContext } from '../../contexts/ContextProvider';
import Pagination from '../Pagination';
import { MdArrowDownward, MdArrowUpward, MdDeleteForever } from 'react-icons/md';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import RenderCustomer from './RenderCustomer';

const CustomersTable = () => {
    const { customer } = useStateContext();
    const [order, setOrder] = useState(customer);
    const [sorted, setSorted] = useState({ sorted: "CustomerName", reversed: false });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = order.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const sortByName = () => {
        setSorted({sorted: "CustomerName", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.CustomerName}`;
        const wordB = `${userB.CustomerName}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByStatus = () => {
        setSorted({sorted: "Status", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Status}`;
        const wordB = `${userB.Status}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByWeeks = () => {
        setSorted({sorted: "Weeks", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Weeks}`;
        const wordB = `${userB.Weeks}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByBudget = () => {
        setSorted({sorted: "Budget", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Budget}`;
        const wordB = `${userB.Budget}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const renderArrow = () => {
        if (sorted.reversed) {
        return <MdArrowUpward />;
        }
        return <MdArrowDownward />
    }
    
    return (
        <div>
            <div className="border-1 mb-3 flex justify-start w-full py-2 dark:bg-main-dark-bg dark:border-gray-600">
                <button type="button" className="flex px-3 py-2 ml-2 dark:text-gray-400 dark:hover:bg-slate-600 text-gray-600 font-medium text-sm leading-normal capitalize rounded hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg transition duration-150 ease-out align-middle">
                    <MdDeleteForever className="text-xl dark:text-gray-400 mr-2"/>
                    Delete
                </button>
            </div>
            <div className="flex flex-nowrap lg:justify-center justify-start border-gray-200 bg-gray-100 border-1 py-2 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex flex-nowrap">
                    <div className="flex justify-center text-gray-500 text-lg mt-1 text-center w-20">
                        <AiOutlineMinusSquare />
                    </div>
                    <div onClick={sortByName} className={employeeRowStyle}>
                        Name
                        <span className={arrowStyle}>{sorted.sorted === "CustomerName" ? renderArrow() : null}</span>
                    </div>
                    <div className="flex justify-center text-gray-500 text-base text-center w-60 dark:text-white">
                        Project Name
                    </div>
                    <div onClick={sortByStatus} className={employeeRowStyle}>
                        Status
                        <span className={arrowStyle}>{sorted.sorted === "Status" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByWeeks} className={employeeRowStyle}>
                        Weeks
                        <span className={arrowStyle}>{sorted.sorted === "Weeks" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByBudget} className={employeeRowStyle}>
                        Budget
                        <span className={arrowStyle}>{sorted.sorted === "Budget" ? renderArrow() : null}</span>
                    </div>
                </div>
            </div>
            <RenderCustomer order={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={customer.length} paginate={paginate} />
        </div>
    )
}

export default CustomersTable