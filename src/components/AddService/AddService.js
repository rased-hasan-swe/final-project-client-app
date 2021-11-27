import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
    axios.post('https://damp-reaches-51938.herokuapp.com/products',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
           
    })
}
    return (
        <div className="add-service ">
            <h1 className="text-center style">Please Add A Service </h1>
    <form className="mx-auto " onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Product name" />
      <input {...register("img")} placeholder=" product Img url" />
      <input type="number" {...register("price")} Placeholder="product price" />
      <input type="number" {...register("review")} Placeholder="people review and rating" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;