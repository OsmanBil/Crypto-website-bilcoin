import React from 'react';
import { useLocation } from 'react-router-dom';
import './orderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { fullName, total } = location.state || {};
  
  return (
    <div className='orderConfirm'>
      <h1>Order confirmation</h1>
      <h2>Success!</h2>
      <p>Thank you, {fullName}</p>
      <p>Your {total} € order is confirmed!</p>
      <p>Please allow 1-3 business day(s) for shipping.</p>
    </div>
  );
};

export default OrderConfirmation;
