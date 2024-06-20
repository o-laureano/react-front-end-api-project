import React, { useState } from "react";
import styled from "styled-components";
import Chevron from "../../assets/icons/Chevron";

const DropdownContainer = styled.div`
  display: flex;
  width: 160px;
  height: 40px;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #1db954;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 8px;
`;

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <DropdownContainer onClick={toggleDropdown}>
        <span>Dropdown</span>
        <Chevron rotate={isOpen ? 180 : 0} />
      </DropdownContainer>
      <DropdownContent isOpen={isOpen}>
        {/* Dropdown items go here */}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
