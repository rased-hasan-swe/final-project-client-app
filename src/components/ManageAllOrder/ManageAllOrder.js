import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css'
const ManageAllOrder = () => {
    const [order,setOrder]=useState([]);
    const [status,setStatus]=useState({});
    const handleStatus=e=>{
        setStatus(e.target.value)
        
    }
    const handleUpdate = (id) => {
        fetch(`https://damp-reaches-51938.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    alert("Status Updated");
                }
            })

    }
    useEffect(()=>{
        fetch(`https://damp-reaches-51938.herokuapp.com/orderData`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    //delet a order
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
    return (
        <div className=" table-responsive-sm">
            <h1 className="text-center container-style">Customer Order List </h1>
            <table className="table mt-3 table-sm ">
  <thead>
    <tr className="table-sm ">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Email</th>
      <th scope="col">place</th>
      <th scope="col">price</th>
      <th scope="col">Delete</th>
      <th scope="col">status</th>
      <th scope="col">update</th>
    </tr>
  </thead>
  <tbody className="">
      {
         order?.map((pd,index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{pd?.name}</td>
            <td>{pd?.email}</td>
            <td>{pd?.place}</td>
            <td>{pd?.price}$</td>
            <td><button onClick={()=>handleDeletOrder(pd?._id)} className="btn-danger text-dark m-2">Remove</button></td>
            <td>
                <form  onChange={handleStatus}>
                    <select>
                    <option>{pd?.status}</option>
                    <option>SHIPPED</option>
                    </select>
                </form>
            </td>
            <td><button onClick={()=>handleUpdate(pd?._id)} className="btn-danger text-dark m-2">update</button></td>


          </tr>
         ))
      }
    
  </tbody>
</table>
        </div>
    );
};

export default ManageAllOrder;