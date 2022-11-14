import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="flex justify-center">
          <nav aria-label="Page navigation">
              <ul className="flex list-style-none">
                  {pageNumbers.map(number => (
                  <li key={number} className="page-item">
                      <Link  onClick={()=> paginate(number)} className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-md focus:bg-sky-200">
                          {number}
                      </Link>
                  </li>
                  ))}
              </ul>
        </nav>
    </div>
  )
}

export default Pagination