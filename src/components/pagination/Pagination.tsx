import React from "react";
import Chevron from "../../assets/icons/Chevron";
import { PaginationContainer, PageNumber, Button } from "./Pagination.styles";
import { useNavigate } from "react-router-dom";
// import { PaginationProps } from "./Pagination.types";

const Pagination: React.FC = () => {
  const handlePrevClick = () => {
    //TODO: Implement useNavigate hook
    const navigate = useNavigate();
  };

  const handleNextClick = () => {
    //TODO: Implement useNavigate hook
    const navigate = useNavigate();
  };

  return (
    <PaginationContainer>
      <Button onClick={handleNextClick} enabled={false}>
        <Chevron direction={90} />
      </Button>
      <PageNumber>1</PageNumber>
      <Button onClick={handlePrevClick} enabled={true}>
        <Chevron direction={-90} />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
