import React, { useEffect, useState, useRef } from 'react';

import { COLOR_MODES } from "../../constants";

const ThemeDropdown = ({ colorState }) => {
  const { ThemeIcon, setColorMode } = colorState

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button type="button" className={`rounded-sm p-1.5 ${isOpen ? 'text-primary' : 'text-body'} hover:text-primary`} onClick={toggleDropdown}>
          {ThemeIcon && <ThemeIcon className='h-6 w-6' />}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 top-12 w-max rounded-lg bg-background border-[1px] border-primary z-10">
          <div className="grid gap-1 px-2 py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {COLOR_MODES.map(({ name, value, icon: Icon }) => (
              <button
                key={value}
                className="grid grid-cols-2 grid-cols-1fr-auto gap-2 h-[34px] items-center w-full px-4 py-2 text-left text-body hover:text-primary"
                onClick={() => {
                  setColorMode(value);
                  setIsOpen(false)
                }}
                role="menuitem"
              >
                <span>{name}</span>
                <Icon className='w-4 h-4' />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;