import React, { useEffect } from 'react';
import prev from '../../Assets/image/icons/prev.svg';
import next from '../../Assets/image/icons/next.svg';

function Pagination({ data, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(data.length / itemsPerPage)

  useEffect(() => {
    // Make sure currentPage doesn't exceed totalPages
    if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, data.length);



  function handlePageChange(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  }

  return (
    <div className='pagination d-flex align-items-center'>
      <div className='me-3 d-flex align-items-center'>
        <p className='d-flex align-items-center'>
          <span className='companytext'>
          {currentPage}-  {Math.min(currentPage * itemsPerPage, data.length)}  of {totalPages}
          {/* {startIndex}-{endIndex} of {totalPages} */}
          </span>
        </p>  
      </div>
      <button
        className='pagination-btn'
        onClick={() => handlePageChange(currentPage - 1)}

      >
        <img src={prev} alt='Previous page' />
      </button>
      <button
        className='pagination-btn ms-3'
        onClick={() => handlePageChange(currentPage + 1)}

      >
        <img src={next} alt='Next page' />
      </button>
    </div>
  );
}

export default Pagination;
