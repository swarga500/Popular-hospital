import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
        <nav className="navbar mb-5 navbar-expand-lg navbar-light bg-success fixed-top">
  <div className="container-fluid">
    <HashLink className="navbar-brand text-warning" to="/home">Popular Hospital</HashLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <HashLink className="nav-link text-white active" aria-current="page" to="/home#home">Home</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link text-white" to="/home#services">Services</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link text-white" to="/home#about">About</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link text-white" to="/home#contact">Contact</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link text-white" to="/register">Register</HashLink>
        </li>
        <li className="nav-item">
          {user?.email ?
              <button onClick={logOut} className="btn btn-light">Logout</button>:
              <HashLink className="nav-link text-white" to="/login">Login</HashLink>
              }
        </li>
       
      </ul>
      <span className="navbar-text">
        signin as: <a className="text-white" href="#login">{
            user?.email
        }</a>
      </span>
    </div>
  </div>
</nav>
<br />
<br />

            
        </>
    );
};

export default Header;