import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css'
const Header = () => {
    const {user,logout}=useAuth();
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div className="container-fluid">
    <NavLink to="/home" className="navbar-brand" ><i class="fas fa-clock"></i><strong> E-watch Fashion</strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link text-white"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link text-white" >Order-Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contract" className="nav-link text-white" >ContractUs</NavLink>
        </li>
        <li className="nav-item">
         {user?.email && <NavLink  to="/dashboard" className="nav-link text-white" >Dashboard</NavLink>}
        </li>
        
      </ul>
      <strong className="mx-1 text-white"> {user?.displayName} </strong>
           { 
             user?.email?
             
           <Button onClick={logout} className="text-white"><i class="fas fa-sign-out-alt"></i> logOut</Button>:
            <NavLink style={{textDecoration:'none'}} to="/login" className="btn-style text-white"><i className="fas fa-users text-white"></i> Register/login</NavLink>}
      

  
    </div>
    
  </div>
  
</nav>
        </>
    );
};

export default Header;