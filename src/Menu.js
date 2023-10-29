import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Lista de Livros</Link>
        </li>
        <li>
          <Link to="/dados">Cadastro de Livros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
