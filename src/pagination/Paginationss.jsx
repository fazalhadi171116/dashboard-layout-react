
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import UserCard from "../components/userCard/UserCard";



const Paginationss = ({ allData }) => {
  const itemsPerPage = 8;
  const [data, setData] = useState([...allData]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

 
  useEffect(() => {
    const maxPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage > maxPages) {
      setCurrentPage(maxPages);
    }
  }, [data, currentPage, itemsPerPage]);

  return (
    <div >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ">
        {currentItems.map((item, index) => (
         
          <div className="col" key={index}>
             <UserCard data={item} /> 
          </div>
        ))}
      </div>

  
      <div className="pagination-container d-flex justify-content-end mt-3">
        <Stack spacing={2}>
          <Pagination
        
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>

    
    </div>
  );
};

export default Paginationss;
