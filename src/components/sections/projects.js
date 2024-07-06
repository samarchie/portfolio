import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .archive-link {
    font-family: var(--font-paragraph);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 35px;
    position: relative;
    margin-top: 50px;
  }
  @media (max-width: 1440px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(max-content, 1fr));
    grid-gap: 35px;
    padding-top: 50px;
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
  }

  .archive-button {
    ${({ theme }) => theme.mixins.bigButton};
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 2rem;
    border-radius: var(--border-radius);
    background-color: var(--light-card);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-top: 15px;

    .folder {
      color: var(--light-cta);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-cta);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

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
    }
  }

  .project-title {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0 0 10px;
    color: var(--light-cta);
    font-size: var(--fz-xxl);
    font-family: var(--font-title);

    a {
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      &.external {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }

  .project-description {
    color: var(--light-text);
    font-size: var(--fz-md);
    line-height: 1.4;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-paragraph);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              external
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 4;
  const projects = data.projects.edges.filter(({ node }) => node);
  const NUM_PROJECTS = projects.length;
  const firstProjects = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstProjects;

  const projectInner = node => {
    const { frontmatter, html } = node;
    const { external, title, tech } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <h3 className="project-title">
            <span>{title}</span>
            {external && (
              <a
                href={external}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noreferrer">
                <Icon name="External" />
              </a>
            )}
          </h3>
          <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
      <div className="button-grid">
        {NUM_PROJECTS > GRID_LIMIT && (
          <button className="more-button" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Hide some projects' : 'Load more projects'}
          </button>
        )}
        <Link className="archive-button" to="/archive">
          View all projects <span aria-hidden="true">👉</span>
        </Link>
      </div>
    </StyledProjectsSection>
  );
};

export default Projects;
