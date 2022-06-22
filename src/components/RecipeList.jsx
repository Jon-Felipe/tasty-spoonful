import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import Loading from './Loading';
import Filters from './Filters';

const Recipe = ({ recipes }) => {
  const { isLoading, search } = useSelector((state) => state.recipe);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className='section-center'>
      {search && <h1>recipe results for {search} </h1>}
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
  h1 {
    padding: 2rem 2.5rem;
    background: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    border-left: 8px solid var(--clr-primary-5);
  }
  .recipe {
    display: grid;
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
