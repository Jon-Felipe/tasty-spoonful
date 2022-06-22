import React from 'react';
import styled from 'styled-components';

// assets
import aboutBcg from '../assets/about-bcg.jpg';

const About = () => {
  return (
    <main>
      <Wrapper className='page section section-center'>
        <img src={aboutBcg} alt='food spices' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi
            dicta nemo tempore aperiam possimus voluptate doloremque sunt
            perspiciatis rem libero quas voluptatem temporibus provident illo,
            autem natus saepe, iste placeat voluptatibus cupiditate dolorum
            adipisci. Ut aspernatur libero quisquam debitis at amet! Sed rem
            illo commodi dicta provident fugiat delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi
            dicta nemo tempore aperiam possimus voluptate doloremque sunt
            perspiciatis rem libero quas voluptatem temporibus provident illo,
            autem natus saepe, iste placeat voluptatibus cupiditate dolorum
            adipisci. Ut aspernatur libero quisquam debitis at amet! Sed rem
            illo commodi dicta provident fugiat delectus.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
