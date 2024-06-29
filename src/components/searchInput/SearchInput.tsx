import { StyledInput } from "../input/Inputs.styles";
import { useSearchInput } from "./SearchInput.container";
import { StyledSearchInput } from "./SearchInput.styles";
import { SearchInputProps } from "./SearchInput.types";

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const { value, handleInputChange } = useSearchInput("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
    onSearch(event.target.value);
  };

  return (
    <StyledSearchInput
      type="text"
      value={value}
      onChange={handleSearch}
      placeholder="Digite o nome do artista"
    />
  );
};

export default SearchInput;
