import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { handleChange } from '../features/recipe/recipeSlice';

// assets & components
import heroBcg from '../assets/hero-bcg.jpg';
import heroBcg2 from '../assets/hero-bcg-2.jpg';
import Search from './Search';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((state) => state.recipe);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === 'Enter' && !search) {
      toast.error('please enter a search value');
    } else if (key === 'Enter' && search) {
      navigate('/recipes');
    }
  };

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          browse all your <br />
          favourite recipes
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          tempora sed dolorem amet quod quis nihil repellendus iusto nostrum,
          quisquam quae maxime accusantium quia iure voluptas magni cum
          deserunt! Odit possimus dolores, autem ea deserunt nobis magni est
          ipsam atque, assumenda blanditiis, quia cumque modi laudantium quae
          nemo at similique?
        </p>
        <Search
          placeholder='Search your favourite recipes...'
          name='search'
          value={search}
          handleKeyDown={handleKeyDown}
          handleChange={handleSearch}
        />
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='food dish' className='main-img' />
        <img src={heroBcg2} alt='recipe book' className='accent-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 350px;
      transform: translateX(-45%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
