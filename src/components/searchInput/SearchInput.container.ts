import { useState } from "react";

export const useSearchInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    handleInputChange,
  };
};
