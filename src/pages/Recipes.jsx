import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../features/recipe/recipeSlice';
import styled from 'styled-components';

// components
import RecipeList from '../components/RecipeList';

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <Wrapper className='section section-center'>
      <RecipeList recipes={recipes} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

export default Recipes;
