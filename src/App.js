import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Category from './pages/Category';

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
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<SingleRecipe />} />
        <Route path='/category/:id' element={<Category />} />
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
