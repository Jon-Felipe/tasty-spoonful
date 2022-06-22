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
        <div className='category-header title'>
          <h2>{id} recipes</h2>
          <div className='underline'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed
            aliquam quia incidunt tempore adipisci aut quos! Ad nesciunt
            doloremque aperiam inventore fuga itaque, sequi dolorem quaerat
            tempora omnis hic nulla animi error totam expedita numquam quae
            officia placeat ea pariatur fugit? Magni, tempore! Provident cum
            quia praesentium libero ipsum.
          </p>
        </div>
        <RecipeList recipes={recipes} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  background: linear-gradient(to bottom, #fff 10%, #f0f9f9 15%);

  .category-header p {
    margin: 1rem 0;
  }
`;

export default Category;
