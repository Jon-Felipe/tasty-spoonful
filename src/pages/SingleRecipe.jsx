import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BiUser, BiAlarm, BiHeart } from 'react-icons/bi';
import {
  getSingleRecipe,
  getRecipeNutrition,
} from '../features/recipe/recipeSlice';

// components
import Loading from '../components/Loading';

const SingleRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, recipe, recipeNutrition } = useSelector(
    (state) => state.recipe
  );

  useEffect(() => {
    dispatch(getSingleRecipe(id));
    dispatch(getRecipeNutrition(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <section className='section section-center'>
        <article className='single-recipe'>
          <div className='single-recipe-body'>
            <div className='single-recipe-header'>
              <h2>{recipe.title}</h2>
              <h5>by: {recipe.creditsText}</h5>
            </div>
            <div className='single-recipe-content'>
              <img src={recipe.image} alt={recipe.title} />
              <div className='single-recipe-stats'>
                <p>
                  <BiUser /> <span>{recipe.servings} people</span>
                </p>
                <p>
                  <BiAlarm />
                  <span>{recipe.readyInMinutes} min.</span>
                </p>
                <p>
                  <BiHeart /> <span>{recipe.aggregateLikes} likes</span>
                </p>
              </div>
              <div className='single-recipe-summary'>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              </div>
            </div>
            <div className='recipe-nutrition'>
              <h3>nutrition facts</h3>
              <div className='nutrition-info'>
                <p>
                  {recipeNutrition.calories} <span>calories</span>
                </p>
                <p>
                  {recipeNutrition.carbs} <span>carbs</span>
                </p>
                <p>
                  {recipeNutrition.fat} <span>fat</span>
                </p>
                <p>
                  {recipeNutrition.protein} <span>protein</span>
                </p>
              </div>
            </div>
          </div>
          <div className='single-recipe-instructions'>
            <div className='single-recipe-ingredients'>
              <h3>ingredients</h3>
              {recipe.extendedIngredients?.map((item, index) => (
                <ul key={index}>
                  <li>{item.original}</li>
                </ul>
              ))}
            </div>
            <div className='single-recipe-directions'>
              <h3>directions</h3>
              <ol>
                {recipe?.analyzedInstructions?.map((instruction) =>
                  instruction.steps.map((item, index) => (
                    <li key={index}>{item.step}</li>
                  ))
                )}
              </ol>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-10);
  .single-recipe {
    display: grid;
    margin-top: 1rem;
  }
  .single-recipe-header h2 {
    font-weight: 400;
  }
  .single-recipe-content img {
    width: 100%;
    max-width: 700px;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .single-recipe-stats {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    border: 2px solid var(--clr-grey-8);
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      span {
        margin-left: 0.25rem;
        font-weight: 700;
      }
    }
  }
  .single-recipe-ingredients ul li {
    font-size: 1.2rem;
    line-height: 2;
    text-transform: capitalize;
  }
  .single-recipe-directions ol li {
    font-size: 1.2rem;
    line-height: 2;
    margin-top: 1rem;
  }
  @media screen and (min-width: 1024px) {
    .single-recipe {
      grid-template-columns: 700px auto;
      grid-column-gap: 2rem;
    }
    .single-recipe-stats p {
      font-size: 1.5rem;
    }
    .single-recipe-summary {
      font-size: 1.25rem;
      margin: 1rem 0;
      letter-spacing: 1px;
      line-height: 2;
    }
  }
  .recipe-nutrition {
    border: 4px solid var(--clr-primary-8);
    border-radius: var(--radius);
    padding: 10px 15px;
    width: 100%;
    max-width: 500px;
    h3 {
      border-bottom: 2px solid var(--clr-primary-6);
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    .nutrition-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.5rem;
        color: var(--clr-primary-7);
        span {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--clr-black);
        }
      }
    }
  }
`;

export default SingleRecipe;
