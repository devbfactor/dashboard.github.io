import React, { useState } from 'react';
import { arrowStyle, employeeRowStyle } from '../componentLogic';
import RenderEmployees from './RenderEmployees';
import { useStateContext } from '../../contexts/ContextProvider';
import Pagination from '../Pagination';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const EmployeeTable = () => {
    const { employee } = useStateContext();
    const [order, setOrder] = useState(employee);
    const [sorted, setSorted] = useState({ sorted: "Name", reversed: false });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [searchPhrase, setSearchPhrase] = useState("");

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = order.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const sortByName = () => {
        setSorted({sorted: "Name", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Name}`;
        const wordB = `${userB.Name}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByTitle = () => {
        setSorted({sorted: "Title", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Title}`;
        const wordB = `${userB.Title}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByCountry = () => {
        setSorted({sorted: "Country", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.Country}`;
        const wordB = `${userB.Country}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByHireDate = () => {
        setSorted({sorted: "HireDate", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.HireDate}`;
        const wordB = `${userB.HireDate}`;
        if (sorted.reversed) {
            return wordB.localeCompare(wordA);
        }
        return wordA.localeCompare(wordB);
        })
        setOrder(usersCopy);
    }

    const sortByReportsTo = () => {
        setSorted({sorted: "ReportsTo", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.ReportsTo}`;
        const wordB = `${userB.ReportsTo}`;
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

    const search = (event) => {
        const matchedUsers = employee.filter((user) => {
            return `${user.Name}`
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        })

        setOrder(matchedUsers);
        setSearchPhrase(event.target.value);
    }

    return (
        <div>
            <div className="search-container border-1 mb-3 flex justify-start w-full py-3 dark:bg-main-dark-bg dark:border-gray-600">
                <FiSearch className="mt-1 ml-3 text-gray-400" />
                <input type="text" className="w-1/4 p-0 m-0 border-none outline-none bg-transparent ml-3 dark:text-white" placeholder="Search employee here" value={searchPhrase} onChange={search} />
            </div>
            <div className="flex flex-nowrap lg:justify-center justify-start border-gray-200 bg-gray-100 border-1 py-2 dark:bg-gray-700 dark:border-gray-600 ">
                <div className="flex flex-nowrap">
                    <div onClick={sortByName} className={employeeRowStyle}>
                        Employee
                        <span className={arrowStyle}>{sorted.sorted === "Name" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByTitle} className={employeeRowStyle}>
                        Designation
                        <span className={arrowStyle}>{sorted.sorted === "Title" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByCountry} className={employeeRowStyle}>
                        Country
                        <span className={arrowStyle}>{sorted.sorted === "Country" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByHireDate} className={employeeRowStyle}>
                        Hire Date
                        <span className={arrowStyle}>{sorted.sorted === "HireDate" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByReportsTo} className={employeeRowStyle}>
                        Reports To
                        <span className={arrowStyle}>{sorted.sorted === "ReportsTo" ? renderArrow() : null}</span>
                    </div>
                </div>
            </div>
            <RenderEmployees order={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={employee.length} paginate={paginate} />
        </div>
    )
}

export default EmployeeTable