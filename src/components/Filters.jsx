import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { handleChange, clearFilters } from '../features/recipe/recipeSlice';

// data & components
import { cuisineFilters, dietFilters } from '../utils/constants';

const Filters = () => {
  const dispatch = useDispatch();
  const { cuisine, diet } = useSelector((state) => state.recipe);

  const filterChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'cuisine') {
      value = e.target.textContent;
      console.log(value, 'value');
    }

    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cuisine && !diet) {
      toast.error('please choose a filter');
      return;
    }
  };

  return (
    <Wrapper>
      <div className='filter-container'>
        <div className='cuisine-filters'>
          <h4>cuisine type</h4>
          <div className='underline'></div>
          <div className='cuisines'>
            {cuisineFilters.map((c, index) => (
              <button
                key={index}
                type='button'
                name='cuisine'
                value={cuisine}
                onClick={filterChange}
                className={cuisine === c ? 'cuisine-btn active' : 'cuisine-btn'}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className='diet-filters'>
          <h4>diet type</h4>
          <div className='underline'></div>
          <div className='diets'>
            <select
              name='diet'
              value={diet}
              onChange={filterChange}
              className='diets-select'
            >
              {dietFilters.map((diet, index) => (
                <option key={index} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='filter-btns'>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => dispatch(clearFilters())}
          >
            clear
          </button>
          <button
            type='submit'
            className='btn submit-btn'
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  .cuisine-filters {
    h4 {
      color: var(--clr-primary-6);
    }
    .underline {
      height: 2px;
      width: 100%;
      background: var(--clr-grey-8);
    }
    .cuisines {
      display: inline-flex;
      flex-direction: column;
      .cuisine-btn {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        letter-spacing: var(--spacing);
        padding: 5px 10px;
        background: transparent;
        border: transparent;
        text-align: start;
        font-size: 1rem;
        color: var(--clr-grey-3);
        transition: var(--transition);
        cursor: pointer;
      }
      .cuisine-btn:hover {
        color: var(--clr-red-dark);
        padding-left: 1.5rem;
      }
      .active {
        color: var(--clr-red-dark);
        padding-left: 1.5rem;
      }
    }
  }
  .diet-filters {
    margin: 1rem 0;
    h4 {
      color: var(--clr-primary-6);
    }
    .underline {
      height: 2px;
      width: 100%;
      background: var(--clr-grey-8);
    }
    .diets {
      margin: 0.5rem 0;
      .diets-select {
        padding: 5px 10px;
        border-radius: var(--radius);
        border-color: var(--clr-grey-7);
        box-shadow: var(--light-shadow);
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
  .filter-btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    .btn {
      width: 100%;
    }
    .clear-btn {
      background-color: transparent;
      color: var(--clr-red-dark);
      border: 1px solid var(--clr-red-light);
      margin-right: 0.2rem;
    }
    .clear-btn:hover {
      background-color: var(--clr-red-light);
      color: var(--clr-white);
    }
  }
`;

export default Filters;
