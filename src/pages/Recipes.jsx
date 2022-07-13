import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../features/recipe/recipeSlice';
import styled from 'styled-components';

// components
import RecipeList from '../components/RecipeList';
import Loading from '../components/Loading';

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes, isLoading } = useSelector((state) => state.recipe);
  const { type } = useParams();

  useEffect(() => {
    dispatch(getRecipes(type));
  }, [type]);

  if (isLoading) {
    return <Loading />;
  }

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
