import React, { useEffect, useState, useRef } from 'react';

import { ReactComponent as SunIcon } from '../../assets/images/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/moon.svg';
import { ReactComponent as ClassicIcon } from '../../assets/images/classic.svg';

const ThemeDropdown = () => {
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
        <button type="button" className={`rounded-full p-2 ${isOpen ? 'text-blue' : 'text-black'}`} onClick={toggleDropdown}>
          <SunIcon className='h-6' />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-max rounded-lg bg-white border-[1px] border-blue">
          <div className="grid gap-1 px-2 py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="grid grid-cols-2 grid-cols-1fr-auto gap-2 h-[34px] items-center w-full px-4 py-2 text-sm text-left text-black hover:text-blue"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              <span>Light</span>
              <SunIcon className='w-3 h-3' />
            </button>
            <button
              disabled
              className="grid grid-cols-2 grid-cols-1fr-auto gap-2 h-[34px] items-center w-full px-4 py-2 text-sm text-left text-gray hover:pointer-events-none"
              role="menuitem"
            >
              {/* TODO: Remove soon tag when implemented */}
              <span>Dark (soon™️)</span>
              <MoonIcon className='w-3 h-3' />
            </button>
            <button
              disabled
              className="grid grid-cols-2 grid-cols-1fr-auto gap-2 h-[34px] items-center w-full px-4 py-2 text-sm text-left text-gray hover:pointer-events-none"
              role="menuitem"
            >
              {/* TODO: Remove soon tag when implemented */}
              <span>Classic (soon™️)</span>
              <ClassicIcon className='w-3 h-3' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;