import React, { useContext } from 'react'
import { DarkContext } from "../ModoContext/DarkContext"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isDarkMode, handleMode } = useContext(DarkContext);
  
  const handleDarkMode = () =>{
    handleMode();
  }
  return (
    <nav className={isDarkMode? "dark" : null}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>
      <button onClick={handleDarkMode}>Change theme</button>
    </nav>
  );
};

export default Navbar;