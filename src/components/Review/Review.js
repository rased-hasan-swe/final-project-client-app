import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
const Review = () => {
    const {user}=useAuth();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
    axios.post('https://damp-reaches-51938.herokuapp.com/review',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
           
    })
}
    return (
        <div className="add-service ">
            <h1 className="text-center style">Submit your review and ratting </h1>
    <form className="mx-auto " onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} value={user?.displayName} />
      <input {...register("email")} value={user?.email} />
      <input type="text" {...register("review")} Placeholder="Your review and ratting" />
      <input type="number" {...register("ratting")} Placeholder="Your review and ratting" />

      <input type="submit" />
    </form>
        </div>
    );
};

export default Review;