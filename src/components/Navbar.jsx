import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { openSidebar } from '../features/recipe/recipeSlice';
import { FaBars, FaUtensilSpoon } from 'react-icons/fa';
import { links } from '../utils/constants';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            <h2>Tasty Spoonful</h2>
            <FaUtensilSpoon />
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: (--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--clr-primary-5);
    svg {
      font-size: 1.75rem;
      margin-left: 0.5rem;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-6);
        }
      }
    }
  }
`;

export default Navbar;
