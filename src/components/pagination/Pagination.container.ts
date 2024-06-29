// src/containers/Pagination.container.ts
import { useState } from "react";

const itemsPerPage = 8;

export const usePagination = (totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = (items: any[]) =>
    items.slice(startIndex, startIndex + itemsPerPage);

  return {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems,
  };
};
