import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch(`https://damp-reaches-51938.herokuapp.com/products`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <>
        <Header></Header>
        <div>
            <h1 className="text-center p-5 mt-5"> World Best Watch collection </h1>
            <div className="container pb-4">
        <Row xs={1} md={3} className="g-4"id="cardData-style"> 
            {
              services.map(service=><Service 
                key={service._id}
                service={service}></Service>)
            }
            </Row>
        </div>
    </div>
    <Footer></Footer>
      </>  
    );
};
export default Services;