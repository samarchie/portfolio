import React from 'react';
import PropTypes from 'prop-types';
import {
  IconEmail,
  IconExternal,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Email':
      return <IconEmail />;
    case 'External':
      return <IconExternal />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
