import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// components
import Filters from './Filters';

const Recipe = ({ recipes }) => {
  const { type } = useParams();
  const { search } = useSelector((state) => state.recipe);

  return (
    <Wrapper className='section-center'>
      {type ? (
        <h2>recipe results for {type} </h2>
      ) : (
        <h2>recipe results for {search} </h2>
      )}
      <div className='recipe'>
        <Filters />
        <div className='recipe-card'>
          {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className='recipe-card-content'>
                <img src={recipe.image} alt={recipe.title} />
                <div className='recipe-card-info'>
                  <h4>{recipe.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h2 {
    padding: 1rem 1.5rem;
    background: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    border-left: 8px solid var(--clr-primary-5);
  }
  .recipe {
    display: grid;
    margin-top: 2.5rem;
  }
  .recipe-card {
    display: grid;
  }
  .recipe-card-content {
    background: var(--clr-white);
    height: 280px;
    width: 100%;
    transition: var(--transition);
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: var(--transition);
    }
  }
  .recipe-card-content:hover {
    transform: translate(-5px, -5px);
    img {
      opacity: 0.7;
    }
  }
  .recipe-card-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0.5rem 0;
    h4 {
      font-weight: 500;
      margin-bottom: 0;
      color: var(--clr-black);
      text-align: center;
    }
  }
  @media screen and (min-width: 768px) {
    .recipe {
      grid-template-columns: 250px 1fr;
      gap: 1rem;
    }
    .recipe-card {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .recipe-card {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Recipe;
