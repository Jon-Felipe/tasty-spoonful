import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes/:type' element={<Recipes />} />
        <Route path='/recipe/:id' element={<SingleRecipe />} />
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
