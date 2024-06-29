import React from "react";
import { Button, PaginationContainer } from "./Pagination.styles";
import Chevron from "../../assets/icons/Chevron";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePrevious} enabled={currentPage > 1}>
        <Chevron />
      </Button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <Button onClick={handleNext} enabled={currentPage < totalPages}>
        <Chevron />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
