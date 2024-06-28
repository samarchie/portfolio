import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(even) {
    .project-content {
      grid-column: 7 / -1;
      text-align: left;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-start;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-start;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    z-index: 2;
    ${({ theme }) => theme.mixins.boxShadow};
    padding: 25px;
    border-radius: var(--border-radius);
    color: var(--light-cta);
    background-color: var(--light-contrast);

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
      background-color: var(--light-contrast);
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
      background-color: transparent;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
      background-color: transparent;
    }
  }

  .project-subtitle {
    margin: 0px 0px 20px 0;
    color: var(--light-text);
    font-family: var(--font-title);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--light-cta);
    font-size: clamp(24px, 5vw, 28px);
    font-family: var(--font-title);
    margin: 0px 0;

    @media (min-width: 768px) {
      a {
        &:hover,
        &:focus-visible {
          color: var(--light-cta);
          outline: 0;
          &:after {
            width: 100%;
          }
          & > * {
            color: var(--light-cta) !important;
            transition: var(--transition);
          }
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 2.5px;
          position: relative;
          bottom: 0.27em;
          background-color: var(--light-cta);
          opacity: 0.7;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
        }
      }
    }

    @media (max-width: 768px) {
      color: var(--light-cta);
    }
  }

  .project-description {
    position: relative;
    font-size: var(--fz-lg);
    font-family: var(--font-paragraph);

    @media (max-width: 768px) {
      padding: 20px 0;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--cta-background);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-cta);
      font-family: var(--font-paragraph);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--light-cta);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--light-cta);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.bigButton};
      margin: 10px;
    }
    .cta2 {
      ${({ theme }) => theme.mixins.button};
      margin: 10px;
      color: var(--light-text);
      background-color: var(--light-contrast);
      border: 1.5px solid var(--light-text);
      font-weight: 500;
    }
  }

  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    background-color: var(--light-background);
    border-radius: var(--border-radius);

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    .img {
      border-radius: var(--border-radius);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
      }
    }
  }

  h2 {
    margin: 0 0px;
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                extension
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              subtitle
              tech
              github
              external
              cta
              ctaText
              cta2
              ctaText2
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="heading" ref={revealTitle}>
        Some Things I've Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const {
              external,
              title,
              subtitle,
              tech,
              github,
              cover,
              cta,
              ctaText,
              cta2,
              ctaText2,
            } = frontmatter;

            const imageData = cover?.childImageSharp
              ? getImage(cover.childImageSharp.gatsbyImageData)
              : null;
            const isSVG = cover.extension === 'svg';

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <div>
                    <div>
                      <h3 className="project-title">
                        <a href={cta}>{title}</a>
                      </h3>
                    </div>
                    {subtitle && <p className="project-subtitle">{subtitle}</p>}

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {cta && (
                        <a href={cta} aria-label="Course Link" className="cta">
                          {ctaText}
                        </a>
                      )}
                      {cta2 && (
                        <a href={cta2} aria-label="Course Link" className="cta2">
                          {ctaText2}
                        </a>
                      )}

                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && cta !== external && cta2 !== external && (
                        <a href={external} aria-label="External Link" className="external">
                          <Icon name="Report" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {isSVG ? (
                  <img src={cover.publicURL} alt={title} width="1000" className="project-image" />
                ) : (
                  imageData && (
                    <GatsbyImage image={imageData} alt={title} className="project-image" />
                  )
                )}
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
