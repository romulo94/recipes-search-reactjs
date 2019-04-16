import React from 'react'

const Navbar = (props) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary">


    <div className="form-group justify-content-center row col-10 my-2">
      <input
        value={props.search}
        onChange={(e) => { props.input(e) }}
        className="form-control col-9 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </nav>
)

export default Navbar;
