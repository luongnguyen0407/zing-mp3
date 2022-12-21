import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
const InputSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClearValue = () => {
    setInputValue("");
  };
  return (
    <div className="relative flex items-center w-2/5 max-w-md gap-2 p-2 ml-4 rounded-full bg-primary">
      <MagnifyingGlassIcon className="icon" strokeWidth={2} />
      <input
        type="text"
        className="w-full pr-6 bg-transparent border-none outline-none"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        onChange={handleSetValue}
        value={inputValue}
      />
      {inputValue && (
        <XMarkIcon
          strokeWidth={2}
          className="absolute cursor-pointer icon right-3"
          onClick={handleClearValue}
        />
      )}
    </div>
  );
};

export default InputSearch;
