import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from 'react-icons/fa';
import { setInputValue } from '../../store/searchSlice';
const options = ['UserID', 'MatchID', 'Hero', 'Item'];

const Search = () => {
  // const [text, setText] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // setText(value);
    const addValue = () => dispatch(setInputValue(value));
    addValue();
    setIsDropdownOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleClearClick = () => {
    setSelectedOption(null);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* input */}
      <div className="flex items-center relative">
        <button
          className="absolute right-2 text-gray-400"
          onClick={() => setIsDropdownOpen(true)}
        >
          <FaSearch />
        </button>
        <input
          className={`w-96 h-10 pl-5 pr-4  text-black focus:outline-none focus:border-gray-400 ${
            isDropdownOpen ? 'rounded-t-lg' : 'rounded-lg'
          }`}
          type="text"
          placeholder="Search"
          // value={text}
          onChange={handleInputChange}
        />
        {/* plague inside input */}
        {selectedOption && (
          <div className="absolute top-1 right-7 flex w-15 h-4 rounded-lg items-center bg-green-200 p-1 text-green-700">
            <span className="ml-0.5 mt-0.5 truncate text-xxs">
              {selectedOption}
            </span>
            <button
              className="ml-1 mb-0.5 text-xxs focus:outline-none"
              onClick={handleClearClick}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>

      {/* dropped menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-gray-600 border border-gray-300 rounded-b-lg overflow-hidden shadow-lg opacity-90"
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-400"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
