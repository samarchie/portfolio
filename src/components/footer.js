import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px 15px 0px 15px;
  text-align: center;
  a {
    color: var(--light-cta);
  }
`;

const StyledCredit = styled.div`
  color: var(--light-text);
  font-family: var(--font-paragraph);
  font-size: var(--fz-xxs);
  line-height: 1;
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit tabindex="-1">
      <div>
        Adapted from <a href="https://brittanychiang.com">Brittany Chiang</a>'s website design.
      </div>
    </StyledCredit>
  </StyledFooter>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
