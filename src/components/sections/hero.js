import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

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
  }

  p {
    margin: 20px 0 0;
    max-width: 650px;
    color: var(--light-text);
    font-family: var(--font-paragraph);
    font-weight: 400;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Kia ora, I'm</h1>;
  const two = <h2 className="big-heading">Sam Archie.</h2>;
  const three = <h3 className="medium-heading">I solve complex problems through data analysis.</h3>;
  const four = (
    <>
      <p>
        I’m a data scientist specialising in leveraging spatial data to solve location-based
        problems. I also provide actionable insights to drive business decisions. Currently, I’m
        focused on building climate and natural hazard risk models at{' '}
        <a href="https://www.urbanintelligence.co.nz/" target="_blank" rel="noreferrer">
          Urban Intelligence
        </a>
        .
      </p>
    </>
  );
  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
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
    </StyledHeroSection>
  );
};

export default Hero;
