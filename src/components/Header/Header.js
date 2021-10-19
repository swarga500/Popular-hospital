import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
        <nav className="navbar mb-5 navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <HashLink className="navbar-brand" to="/">Popular</HashLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <HashLink className="nav-link active" aria-current="page" to="/home">Home</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/services">Services</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/about">About</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/contact">Contact</HashLink>
        </li>
        <li className="nav-item">
          {user?.email ?
              <button onClick={logOut} className="btn btn-light">Logout</button>:
              <HashLink className="nav-link" to="/login">Login</HashLink>
              }
        </li>
       
      </ul>
      <span className="navbar-text">
        signin as: <a href="#login">{
            user?.displayName
        }</a>
      </span>
    </div>
  </div>
</nav>
            
        </>
    );
};

export default Header;