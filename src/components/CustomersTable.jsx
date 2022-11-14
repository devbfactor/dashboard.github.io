import React, { useState } from 'react';
import { arrowStyle, spanStyle } from '../components/componentLogic';
import { useStateContext } from '../contexts/ContextProvider';
import Pagination from '../components/Pagination';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
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

    const sortByProject = () => {
        setSorted({sorted: "ProjectName", reversed: !sorted.reversed})
        const usersCopy = [...order];
        usersCopy.sort((userA, userB) => {
        const wordA = `${userA.ProjectName}`;
        const wordB = `${userB.ProjectName}`;
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
            <div>
                {/* Delete container here */}
            </div>
            <div className="flex flex-nowrap lg:justify-center justify-start border-gray-200 border-1 py-3">
                <div className="flex flex-nowrap">
                    <div onClick={sortByName} className={spanStyle}>
                        Customer Name
                        <span className={arrowStyle}>{sorted.sorted === "CustomerName" ? renderArrow() : null}</span>
                    </div>
                    <div onCLick={sortByProject} className={spanStyle}>
                        Project Name
                        <span className={arrowStyle}>{sorted.sorted === "ProjectName" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByStatus} className={spanStyle}>
                        Status
                        <span className={arrowStyle}>{sorted.sorted === "Status" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByWeeks} className={spanStyle}>
                        Weeks
                        <span className={arrowStyle}>{sorted.sorted === "Weeks" ? renderArrow() : null}</span>
                    </div>
                    <div onClick={sortByBudget} className={spanStyle}>
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