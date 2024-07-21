import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, socialMedia } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledContactSection = styled.section`
  @media (max-width: 768px) {
    margin: 0;
    padding-bottom: 25px;
  }

  h2 {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .point-left {
    margin-right: 10px;

    font-family: var(--font-title);
    font-weight: 600;
    font-size: clamp(40px, 8vw, 50px);

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledSocialLinks = styled.div`
  display: none;
  text-align: left;
  padding-top: 30px;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    color: var(--light-cta);
    padding-bottom: 100px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: left;

    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline;
      margin-right: 20px;

      a {
        padding: 10px;

        &:hover,
        &:focus {
          transform: translateY(-3px);
        }

        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact">
      <span role="img" aria-label="Point down emoji" className="point-left">
        👈 Get In Touch
      </span>
      <h2>Get In Touch</h2>
      <p>
        My inbox is always open. Whether you want to work together, have a question or just want to
        say hi, I'll try my best to get back to you!
      </p>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
    </StyledContactSection>
  );
};

export default Contact;
