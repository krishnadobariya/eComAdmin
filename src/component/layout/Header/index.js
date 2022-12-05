import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../css/Header/style.css'

function Header() {
  return (
    <div>
    <nav className="main-header navbar navbar-expand  navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/" className="nav-link">Form</NavLink>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/" className="nav-link">Table</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      </ul>
    </nav>
  </div>
  )
}

export default Header