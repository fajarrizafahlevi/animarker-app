import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

function Header() {
  const [input, setInput] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(input);
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
              inputValue={input}
              onInputChange={setInput}
            />
            <Button type="submit" />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
