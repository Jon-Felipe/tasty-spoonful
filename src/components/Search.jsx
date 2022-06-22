import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Search = ({ name, value, placeholder, handleChange, handleKeyDown }) => {
  return (
    <Wrapper>
      <input
        type='text'
        name={name}
        value={value}
        placeholder={placeholder || 'Search...'}
        onChange={handleChange}
        onKeyUp={handleKeyDown}
      />
      <FaSearch />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 10px 15px;
  border: 1px solid var(--clr-grey-7);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border: transparent;
    width: 100%;
    font-size: 1.5rem;
  }
  input:focus {
    outline: none;
  }
  svg {
    font-size: 2rem;
  }
`;

export default Search;
