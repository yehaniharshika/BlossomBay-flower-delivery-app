import React, { useContext } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Verify = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <div className='verify'>
      <div className="spinner"></div>
      
    </div>
  )
}

export default Verify
