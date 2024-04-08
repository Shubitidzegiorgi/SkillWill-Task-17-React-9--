import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../reducers/themeReducer';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const toggle = () => {
    dispatch(toggleTheme());
    document.body.classList.toggle('dark-mode', isDarkMode); // Toggle dark mode class on body
  };

  return (
    <button onClick={toggle}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
