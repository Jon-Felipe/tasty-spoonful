import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCategoryRecipes } from '../features/recipe/recipeSlice';

// components
import RecipeList from '../components/RecipeList';
import Loading from '../components/Loading';

const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, recipes } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getCategoryRecipes(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className='page-100'>
      <div className='section-center category'>
        <RecipeList recipes={recipes} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;

  .category-header p {
    margin: 1rem 0;
  }
`;

export default Category;
