import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

interface HeaderProps {
  keywordValue: string;
  onKeywordChange: (text: string) => void;
}

function Header(props: HeaderProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(props.keywordValue);
  }

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a
            href="/"
            className="navbar-brand"
          >
            Animarker
          </a>
          <form
            className="d-flex"
            role="search"
            onSubmit={handleSubmit}
          >
            <Input
              inputValue={props.keywordValue}
              onInputChange={props.onKeywordChange}
            />
            <Button type="submit" />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
