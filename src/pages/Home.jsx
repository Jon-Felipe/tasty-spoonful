import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearState } from '../features/recipe/recipeSlice';

// components
import Hero from '../components/Hero';
import RecipeCategory from '../components/RecipeCategory';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <main>
      <Hero />
      <RecipeCategory />
    </main>
  );
};

export default Home;
