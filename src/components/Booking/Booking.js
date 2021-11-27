import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Booking = () => {
    const {serviceId}=useParams();
    const {user}=useAuth();
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://damp-reaches-51938.herokuapp.com/products`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    const {register, handleSubmit,reset } = useForm();
 const onSubmit = data =>{
     data.status='PENDING'
     console.log(data);
     axios.post(`https://damp-reaches-51938.herokuapp.com/orderData`,data)
     .then(res=>{
           if(res.data.insertedId){
            alert('added successfully');
            reset();
           }
     })
}

const viewDeatils = services.find(view=>view._id===serviceId)
    return (
        <>
        <Header></Header>
        <section className=" container mx-auto add-service ">
            
            <div className="section">
                <h1 className="text-center mt-5">Place Your Order!!please submit your from</h1>
            </div> 
     <form className="mx-auto " onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} value={user?.displayName} />
      <input {...register("email")} value={user?.email} />
      <input {...register("Bookingdate")} defaultValue={new Date()} />
      <input {...register("ratting")}  placeholder="your ratting" />
    {viewDeatils &&<input {...register("place")} defaultValue={viewDeatils?.name} Placeholder=" product name " />}
    {viewDeatils &&<input type="number" {...register("price")} defaultValue={viewDeatils?.price} Placeholder="price" />}
    
      
      
      <input type="submit" />
    </form>

        </section>
        <Footer></Footer>
        </>
    );
};

export default Booking;