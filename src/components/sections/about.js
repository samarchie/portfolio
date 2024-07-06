import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-paragraph);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--light-cta);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPicGrid = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
  }

  li:last-child {
    // There's no science in using "10" here. In all my testing, this delivered the best results.
    flex-grow: 10;
  }

  img {
    max-height: 300px;
    min-width: 150px;
    object-fit: cover;
    vertical-align: bottom;
  }

  // Portrait
  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }

  // Short screens
  @media (max-height: 480px) {
    li {
      height: 80vh;
    }
    img {
      max-height: 150px;
    }
  }

  // Smaller screens in portrait
  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul {
      flex-direction: row;
    }
    li {
      height: auto;
      width: 100%;
    }
    img {
      width: 100%;
      max-height: 150px;
      min-width: 0;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <section id="about" ref={revealContainer}>
      <h2>About Me</h2>

      <StyledText>
        <div>
          <p>
            Hello! My name is Sam and I enjoy creating things that live on the internet. I need to
            come back and fill this section in because I hate writing about myself and I will
            procrastinate doing it.
          </p>

          <p>
            Currently, I'm focused on building climate and natural hazard risk models at{' '}
            <a href="https://www.urbanintelligence.co.nz/">Urban Intelligence</a>.
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
        </div>

        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </StyledText>

      <StyledPicGrid>
        <ul>
          <li>
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </li>
          <li>
            <StaticImage
              className="img"
              src="../../images/bali.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Picture of Sam in Bali"
            />
          </li>
          <li>
            <StaticImage
              className="img"
              src="../../images/retro.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Retro picture of Sam"
            />
          </li>
          <li>
            <StaticImage
              className="img"
              src="../../images/tramp.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Picture of Sam on a tramping"
            />
          </li>
          <li>
            <StaticImage
              className="img"
              src="../../images/usa.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Sam in front of his poster in the USA"
            />
          </li>
          <li>
            <StaticImage
              className="img"
              src="../../images/wellington.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Sam with a backshot of Wellington"
            />
          </li>
        </ul>
      </StyledPicGrid>
    </section>
  );
};

export default About;
