import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a
            href="/"
            className="navbar-brand"
          >
            Navbar
          </a>
          <form
            className="d-flex"
            role="search"
          >
            <Input />
            <Button />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
