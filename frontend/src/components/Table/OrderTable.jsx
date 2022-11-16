import React, { useState } from 'react';
import { arrowStyle, spanStyle } from '../componentLogic';
import { useStateContext } from '../../contexts/ContextProvider';
import Pagination from '../Pagination';
import RenderUsers from './RenderUsers';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

const OrderTable = () => {
  const { posts } = useStateContext();
  const [order, setOrder] = useState(posts);
  const [sorted, setSorted] = useState({ sorted: "OrderID", reversed: false })
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = order.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortById = () => {
    setSorted({sorted: "OrderID", reversed: !sorted.reversed})
    const usersCopy = [...order];
    usersCopy.sort((userA, userB) => {
      if ( sorted.reversed ) {
        return userA.OrderID - userB.OrderID;
      }
      return userB.OrderID - userA.OrderID;
    })
    setOrder(usersCopy);
  }

  const sortByWord = () => {
    setSorted({sorted: "OrderItems", reversed: !sorted.reversed})
    const usersCopy = [...order];
    usersCopy.sort((userA, userB) => {
      const wordA = `${userA.OrderItems}`;
      const wordB = `${userB.OrderItems}`;
      if (sorted.reversed) {
        return wordB.localeCompare(wordA);
      }
      return wordA.localeCompare(wordB);
    })
    setOrder(usersCopy);
  }

  const sortByCustomer = () => {
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

  const sortByAmount = () => {
    setSorted({sorted: "TotalAmount", reversed: !sorted.reversed})
    const usersCopy = [...order];
    usersCopy.sort((userA, userB) => {
      if ( sorted.reversed ) {
        return userA.TotalAmount - userB.TotalAmount;
      }
      return userB.TotalAmount - userA.TotalAmount;
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

  const sortByLocation = () => {
    setSorted({sorted: "Location", reversed: !sorted.reversed})
    const usersCopy = [...order];
    usersCopy.sort((userA, userB) => {
      const wordA = `${userA.Location}`;
      const wordB = `${userB.Location}`;
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
    <div >
        <div className="flex flex-nowrap lg:justify-center justify-start border-gray-200 dark:border-gray-600 bg-gray-100 border-1 py-2 dark:bg-gray-700">
          <div className="flex flex-nowrap">
              <div className="text-gray-500 text-base text-center w-44 dark:text-white">Image</div>
              <div onClick={sortByWord} className={spanStyle}>
                Item 
                <span className={arrowStyle}>{sorted.sorted === "OrderItems" ? renderArrow() : null}</span>
              </div>
              <div onClick={sortByCustomer} className={spanStyle}>
                Customer Name
                <span className={arrowStyle}>{sorted.sorted === "CustomerName" ? renderArrow() : null}</span>
              </div>
              <div onClick={sortByAmount} className={spanStyle}>
                Total Amount
                <span className={arrowStyle}>{sorted.sorted === "TotalAmount" ? renderArrow() : null}</span>
              </div>
              <div onClick={sortByStatus} className={spanStyle}>
                Status
                <span className={arrowStyle}>{sorted.sorted === "Status" ? renderArrow() : null}</span>
              </div>
              <div onClick={sortById} className={spanStyle}>
                Order ID
                <span className={arrowStyle}>{sorted.sorted === "OrderID" ? renderArrow() : null}</span>
              </div>
              <div onClick={sortByLocation} className={spanStyle}>
                Location
                <span className={arrowStyle}>{sorted.sorted === "Location" ? renderArrow() : null}</span>
              </div>
            </div> 
        </div>
          <RenderUsers order={currentPosts} /> 
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default OrderTable

