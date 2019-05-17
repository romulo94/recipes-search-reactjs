import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ search, handle }) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary">
    <div className="form-group justify-content-center row col-10 my-2">
      <input
        value={search}
        onChange={(e) => {
          handle(e);
        }}
        className="form-control col-9 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </nav>
);

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Navbar;
