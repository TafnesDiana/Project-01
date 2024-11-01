import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };


  return (
    <div className="relative inline-block text-left w-full">
      <div onClick={() => setIsOpen(!isOpen)} className=" mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] cursor-pointer  border-[#00000040] hover:border-neutral-950 outline-none resize-none w-full px-4 py-2 flex justify-between">
        {selectedOption || " "}
        <span className={`transform transition-transform ${isOpen ? ' text-[#3EB25E]' : 'text-[#3EB25E4D]'}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-200 rounded-md  ">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
