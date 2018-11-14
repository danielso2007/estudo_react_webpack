import React from "react";

export default props => {

  const hash = window.location.hash;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <i className="fa fa-calendar-check-o" /> TodoApp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={ hash === '#/todos' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link" href="#/todos">
              Tarefas
            </a>
          </li>
          <li className={ hash === '#/about' ? 'nav-item active' : 'nav-item'}>
            <a className="nav-link" href="#/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
