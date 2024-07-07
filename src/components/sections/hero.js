import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledHeroSection = styled.li`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
  margin-right: 20px;
  position: relative;
  display: grid;
  align-items: center;

  h1 {
    margin: 60px 0px 0px 4px;
    color: var(--light-text);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 500;
    font-family: var(--font-title);
    @media (max-width: 480px) {
      margin: 0 0 30px 2px;
    }
  }

  h2 {
    margin-top: 0px;
    color: var(--cta);
    line-height: 90%;
    font-family: var(--font-title);
    font-weight: 500;
    color: var(--light-cta);
  }

  h3 {
    margin-top: 10px;
    line-height: 90%;
    color: var(--light-text);
    font-family: var(--font-title);
    font-weight: 500;
    a {
      ${({ theme }) => theme.mixins.bigButton};
      margin-top: 40px;
      font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
      font-weight: 400;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 650px;
    color: var(--light-cta);
    font-family: var(--font-paragraph);
    font-weight: 400;
  }

  .hero-content {
    position: relative;
    grid-row: 1 / -1;
    padding: 25px;
    border-radius: var(--border-radius);
    color: var(--light-text);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
    margin-right: 0; /* Remove margin for mobile screens */
    background-color: transparent;
  }

  .hero-image {
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    background-color: var(--light-background);
    border-radius: var(--border-radius);
    width: 100%;
    max-height: 550px;

    grid-column: 1 / -1;
    opacity: 0.25;

    .img {
      object-fit: cover;
      }
    }
  }

  @media (max-width: 425px) {
    .hero-image {
      display: none;
    }
  }

  .emoji {
    display: inline-block;
    vertical-align: text-top;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .wave-hand {
    margin-left: 10px;
    cursor: pointer;

    &.animated {
      animation-duration: 1s;
      animation-fill-mode: both;
    }
    &.wave {
      animation-name: wave;
    }

    @keyframes wave {
      from {
        transform: none;
      }
      15% {
        transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
      }
      30% {
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
      }
      45% {
        transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
      }
      60% {
        transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
      }
      75% {
        transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
      }
      to {
        transform: none;
      }
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const waveHandRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const waveHand = waveHandRef.current;

    if (waveHand) {
      // Add the wave class on mount
      waveHand.classList.add('wave');
      setTimeout(() => {
        waveHand.classList.remove('wave');
      }, 1000); // Duration of the wave animation

      // Add hover event listener
      const handleMouseOver = () => {
        waveHand.classList.add('wave');
        setTimeout(() => {
          waveHand.classList.remove('wave');
        }, 1000); // Duration of the wave animation
      };

      waveHand.addEventListener('mouseover', handleMouseOver);

      return () => {
        waveHand.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, [isMounted]);

  const one = <h1>Kia ora, I'm</h1>;
  const two = (
    <h2 className="big-heading">
      Sam Archie{' '}
      <span
        ref={waveHandRef}
        role="img"
        aria-label="Waving emoji"
        className="emoji wave-hand animated">
        👋
      </span>
    </h2>
  );
  const three = (
    <p>
      I'm a data scientist based in Aotearoa New Zealand. My expertise is in leveraging data to
      answer complex questions and provide actionable insights to drive business decisions.
    </p>
  );
  const four = (
    <h3>
      <a href="#projects" className="link">
        See what I have been up to{' '}
        <span role="img" aria-label="Point down emoji">
          👇
        </span>
      </a>
    </h3>
  );
  const items = [one, two, three, four];

  return (
    <section id="hero">
      <StyledHeroSection>
        <div className="hero-content">
          {prefersReducedMotion ? (
            items.map((item, i) => <div key={i}>{item}</div>)
          ) : (
            <TransitionGroup component={null}>
              {isMounted &&
                items.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          )}
        </div>
        <div className="hero-image">
          <StaticImage
            className="img hide-on-mobile"
            src="../../images/me circle2.png"
            quality={100}
            height={800}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Headshot"
          />
        </div>
      </StyledHeroSection>
    </section>
  );
};

export default Hero;
