// assets
import breakfast from '../assets/breakfast.jpg';
import bread from '../assets/bread.jpg';
import main from '../assets/main.jpg';
import fingerfood from '../assets/fingerfood.jpg';
import dessert from '../assets/dessert.jpg';
import soup from '../assets/soup.jpg';
import beverage from '../assets/beverage.jpg';
import drink from '../assets/drink.jpg';
import salad from '../assets/salad.jpg';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
];

export const recipeCategories = [
  {
    id: 1,
    title: 'breakfast',
    image: breakfast,
    url: 'breakfast',
  },
  {
    id: 2,
    title: 'bread',
    image: bread,
    url: 'bread',
  },
  {
    id: 3,
    title: 'main',
    image: main,
    url: 'main-course',
  },
  {
    id: 4,
    title: 'fingerfood',
    image: fingerfood,
    url: 'fingerfood',
  },
  {
    id: 5,
    title: 'dessert',
    image: dessert,
    url: 'dessert',
  },
  {
    id: 6,
    title: 'soup',
    image: soup,
    url: 'soup',
  },
  {
    id: 7,
    title: 'beverage',
    image: beverage,
    url: 'beverage',
  },
  {
    id: 8,
    title: 'drink',
    image: drink,
    url: 'drink',
  },
  {
    id: 9,
    title: 'salad',
    image: salad,
    url: 'salad',
  },
];

export const cuisineFilters = [
  'African',
  'Chinese',
  'Greek',
  'Indian',
  'Italian',
  'Mexican',
  'Mediterranean',
  'Spanish',
];

export const dietFilters = [
  'All',
  'Gluten Free',
  'Ketogenic',
  'Vegetarian',
  'Vegan',
  'Pescetarian',
  'Whole30',
];
