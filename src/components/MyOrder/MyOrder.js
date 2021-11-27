import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        fetch(`https://damp-reaches-51938.herokuapp.com/orderData`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
        const handleDeletOrder = id =>{
      const url = `https://damp-reaches-51938.herokuapp.com/orderData/${id}`;
      fetch(url,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount>0){
              alert('deleted successfully');
              const remainingOrder = order.filter(orderd=>orderd._id!==id);
              setOrder(remainingOrder);
          }
      })
  }
        const same = order.filter(order => order.email === user.email);
    return (
        <div>
            <div className=" table-responsive-sm">
            <h1 className="text-center container-style">My Order List </h1>
            <table className="table mt-3 table-sm ">
  <thead>
    <tr className="table-sm ">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Email</th>
      <th scope="col">place</th>
      <th scope="col">price</th>
      <th scope="col">status</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody className="">
      {
         same?.map((pd,index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{pd?.name}</td>
            <td>{pd?.email}</td>
            <td>{pd?.place}</td>
            <td>{pd?.price}$</td>
            <td>{pd?.status}</td>
            <td><button onClick={()=>handleDeletOrder(pd._id)} className="btn-danger text-dark m-2">Remove</button></td>
          </tr>
         ))
      }
    
  </tbody>
</table>
        </div>
        </div>
    );
};

export default MyOrder;