import { useState } from "react";

export const usePagination = (totalItems, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
  };
};