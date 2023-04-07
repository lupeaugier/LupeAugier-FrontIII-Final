
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { navigation } from '../src/NavRoutes/navigation';
import { DarkContext } from './ModoContext/DarkContext';


const App = () => {

  const { isModoOscuro } = useContext(DarkContext);

  return (

    <BrowserRouter>
      <div className={ isModoOscuro? "dark" : "app"}>
        <Navbar />
        <Routes>
          {navigation.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App
