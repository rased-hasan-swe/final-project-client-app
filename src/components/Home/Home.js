import React, { useEffect, useState } from 'react';
import {Carousel, Card, Col, Row } from 'react-bootstrap';
import slide1 from '../../Images/slide1.jpg'
import slide2 from "../../Images/Slide-2.jpg"
import slide3 from '../../Images/slide-3.jpg'
import './Home.css';
import imgJ from '../../Images/p-1.jpg';
import imgk from '../../Images/p-2.jpg';
import imgQ from '../../Images/p-3.jpg';
import imgR from '../../Images/p-4.jpg';
import { NavLink } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewData from '../ReviewData/ReviewData'
const Home = () => {
  const [services,setServices]=useState([]);
  const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch(` https://damp-reaches-51938.herokuapp.com/products`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    useEffect(()=>{
      fetch('https://damp-reaches-51938.herokuapp.com/review')
       .then(res=>res.json())
       .then(data=>setReviews(data));
    },[])
    return (
        <>
        <Header></Header>
         <section id="header"className="d-flex align-items-center justify-content-center ">
        <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                  <div id="header-style"className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 mt-5 "> 
                  <Carousel fade id="slide-cotainer" className=" mt-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
      <h3  className="mb-5">We provide the best Product service</h3>
      <NavLink to="/services"className="btn-get-started">Get it now</NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Second slide"
    />

    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
    <h3  className="mb-5">We provide the best Product service</h3>
      <NavLink to="/services"className="btn-get-started">Order now </NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

    <Carousel.Caption className="justify-content-center align-items-center mx-auto mb-5">
    <h3  className="mb-5">We provide the best Product service</h3>
      <NavLink to="/services"className="btn-get-started">Order now</NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                      </div>
                      <div className="col-lg-6 order-2 ordegr-lg-2 header-img mt-5">
                      <h2 className="mt-5 p-2"> 
                       We provide the world best brand and new collection watch. We provied the best service in the word.keep touch with us. Buy wathch and makes your parsonality awesome
                       <strong className="brand-name"> E-watch.com <i class="fas fa-clock"></i></strong>

                      </h2>
                      <h5 className="my-3">
                         <strong>Many watch enthusiasts would love to make a bit of money from buying and selling watches. Rolex is, without a doubt, the number one brand for making money on the watch market. Rolexes have significantly gone up in price over the last three to four years. This makes buying one a costly prospect these days, but are some models still flying under the radar? While there aren’t any Rolex, there are a few we think still have upward potential when it comes to price.</strong>
                      </h5>
                      <div className="mt-3">
                       <NavLink to="/services"className="btn-get-started ">
                           Get started
                       </NavLink>
                      </div>
                      </div>
                  </div>
              </div>
            </div>

        </div>
        </section>
        <section>
        <h6 className="text-center mt-5"> Product Description</h6>
        <h3 className="text-center mt-3 mb-5">World best Brand Watch </h3>
        <div>
               <div className="container mt-4">
               <Row xs={1} md={3} className="g-4"id="cardData-style"> 
            {
              services.slice(0,6).map(service=><HomeService
                key={service._id}
                service={service}></HomeService>)
            }
            </Row>
               </div>
           </div>
        </section>
        <section>
        <h6 className="text-center mt-5"> customers comments </h6>
        <h3 className="text-center mt-3 mb-5"> Customer review and ratting description </h3>
        <div>
               <div className="container mt-4">
               <Row xs={1} md={3} className="g-4"id="cardData-style"> 
            {
              reviews.map(review=><ReviewData
                key={review._id}
                review={review}></ReviewData>)
            }
            </Row>
               </div>
           </div>
        </section>
        <section>
            
            <div className="container">
            <div className=" m-5">
                 <h1 className="text-center p-4 mb-4"> Our site Admin </h1>
             <Row xs={1} md={4} className="g-5">
             <Col>
       <Card className="">
         <Card.Img variant="" src={imgQ} />
         <Card.Text className="text-center p-3">
         <strong> Shane Warne </strong> <br />
         Admin
         </Card.Text>
       </Card>
     </Col>
     <Col>
       <Card className="">
         <Card.Img variant="" src={imgR} />
         <Card.Text className="text-center p-3">
        <strong>Avelina Smith </strong><br />
         Admin
         </Card.Text>
       </Card>
     </Col>
     <Col>
       <Card className="">
         <Card.Img variant="" src={imgJ} />
         <Card.Text className="text-center p-3">
         <strong> John Bond </strong><br />
         Admin
             </Card.Text>
       </Card>
     </Col>
     <Col>
       <Card className="">
         <Card.Img variant="" src={imgk} />
         <Card.Text className="text-center p-3">
         <strong> Sophia Smith </strong><br />
         Admin
             </Card.Text>
       </Card>
     </Col>
 </Row>
             </div>
            </div>
         
         </section>
         <Footer></Footer>
        </>
    );
};

export default Home;