import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
});

export default customFetch;
