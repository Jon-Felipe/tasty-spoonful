import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { recipeCategories } from '../utils/constants';

const RecipeCategory = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <div className='category-title'>
          <h1>all recipes</h1>
          <h4>
            <span>select</span> a category
          </h4>
        </div>
        <div className='category-description'>
          <p>
            Browse our wide variety of easy and delicious recipes, especially
            designed to add flair and gourmet touches to the dishes you create.
          </p>
        </div>
        <div className='category-recipe'>
          {recipeCategories.map((category) => {
            const { id, title, image, url } = category;
            return (
              <Link to={`recipes/${url}`} key={id} className='category-content'>
                <h4>{title} recipes</h4>
                <img src={image} alt={title} />
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .category-title {
    h1 {
      color: var(--clr-primary-5);
    }
    h4 span {
      border-bottom: 2px solid var(--clr-grey-3);
    }
  }
  .category-description {
    margin: 2rem 0;
  }
  .category-recipe {
    display: grid;
    grid-row-gap: 1rem;
  }
  .category-content {
    display: grid;
    grid-template-columns: 1fr 100px;
    place-items: center;
    border: 1px solid var(--clr-grey-9);
    border-radius: var(--radius);
    background: var(--clr-white);
    transition: var(--transition);
    h4 {
      font-weight: 400;
      color: var(--clr-black);
      margin: 0;
    }
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
    }
  }
  .category-content:hover {
    box-shadow: var(--light-shadow);
  }
  @media screen and (min-width: 768px) {
    .category-recipe {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
  }
  @media screen and (min-width: 1440px) {
    .category-recipe {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default RecipeCategory;
