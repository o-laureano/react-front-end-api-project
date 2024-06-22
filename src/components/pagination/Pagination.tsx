import React from "react";
import Chevron from "../../assets/icons/Chevron";
import { PaginationContainer, PageNumber, Button } from "./Pagination.styles";
import { useNavigate } from "react-router-dom";
import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      navigate(`?page=${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      navigate(`?page=${currentPage + 1}`);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePrevClick} enabled={currentPage > 1}>
        <Chevron direction={-90} />
      </Button>
      <PageNumber>Página {currentPage}</PageNumber>
      <Button onClick={handleNextClick} enabled={currentPage < totalPages}>
        <Chevron direction={90} />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
