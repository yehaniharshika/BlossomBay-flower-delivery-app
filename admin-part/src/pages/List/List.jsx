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
    <div>
      
    </div>
  )
}

export default List
