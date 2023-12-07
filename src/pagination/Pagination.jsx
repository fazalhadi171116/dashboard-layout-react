import React, { useState, useEffect } from "react";
import UserCard from "../components/userCard/UserCard";
import data from "../components/data/data.json";

const Pagination = ({ allData }) => {
  const itemsPerPage = 10;

  // Example data
  const [data, setData] = useState([...allData]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update page when data changes
  useEffect(() => {
    const maxPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage > maxPages) {
      setCurrentPage(maxPages);
    }
  }, [data, currentPage, itemsPerPage]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-4 ">
        {currentItems.map((item, index) => (
          //<li key={index}>{item}</li>
          <div className="col" key={index}>
            <UserCard data={item} />
          </div>
        ))}
      </div>


      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-end mt-3">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
            (page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page + 1 && "active"}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(data.length / itemsPerPage) &&
              "disabled"
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
