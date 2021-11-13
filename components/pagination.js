import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="block my-4 mx-4">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        {pageNumbers.map((number) => (
          <>
            <li
              onClick={() => {
                paginate(number);
              }}
              className={`hover:bg-blue-500 hover:text-white transition-all duration-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium
                  ${
                    currentPage === number
                      ? "bg-blue-500 border-gray-300 text-white "
                      : "bg-white border-gray-300 text-gray-500"
                  }
                    `}
            >
              <a key={number}>{number}</a>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
