import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Contract = () => {
    return (
        <>
        <Header></Header>
        <div>
        <div className="container mt-5">
<div className="row row-cols-1">
  <div className="col col-md-6 ">
    <div className="mt-5 mb-3">
    <h1 className="">Leave Us A Message</h1>
    <h4><i className="fas fa-envelope"></i> Email Address :</h4>
    <p>support@example.com</p>
    <h4><i className="fas fa-phone"></i> Phone Number :</h4>
    <p>+98 12345 67890</p> 
    <h4><i className="fas fa-map-marker-alt"></i> Our Location</h4>
    <p>19/A, Mount View, London</p>
    </div>
  </div>
  <div className="col col-md-6 ">
  <form className="m-5">
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
</div>
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label">Home adress </label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  <div id="emailHelp" className="form-text">We'll never share your home adress with anyone else.</div>
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  
</div>
</div>
      </div>
      <Footer></Footer>
      </>
    );
};

export default Contract;