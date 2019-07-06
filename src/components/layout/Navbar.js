import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 className='title-navbar'>
        <i className={icon} style={{ fontSize: '2.5rem', margin: '10px' }} />{' '}
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Tico's GitHub Finder",
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
