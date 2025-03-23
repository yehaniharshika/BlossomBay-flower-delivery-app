import React, { useEffect, useState } from 'react'
import './List.css'
import axios  from 'axios';
import { toast } from 'react-toastify';

const List = () => {

    const url = "http://localhost:4000"
    const [list,setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/flower/list`);
        console.log(response.data);
        
        if(response.data.success){
            setList(response.data.data);
        }else {
            toast.error("Error", {
                style: { fontFamily: "Montserrat, sans-serif",fontWeight:"700" },
            })
        }
    }

    useEffect(() => {
        fetchList();
    },[])
  return (
    <div className='list add flex-col'>
    <p className='list-title'>All Flowers List</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return(
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/`+ item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Rs: {item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default List
