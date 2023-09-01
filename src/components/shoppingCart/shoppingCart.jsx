import React, { useState } from 'react';
import './shoppingCart.css';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ items, onDelete }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    creditCard: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();


  const total = items.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.fullName.length < 6) errors.fullName = 'Mindestens 6 Buchstaben erforderlich.';
    if (formData.address.length < 6) errors.address = 'Mindestens 6 Buchstaben erforderlich.';
    if (formData.creditCard.length !== 16) errors.creditCard = 'Genau 16 Ziffern erforderlich.';
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      navigate('/orderConfirmation', { replace: false, state: { fullName: formData.fullName, total } });
      // Reset Form and Cart if necessary
    }
  };
  

  return (
    <div className='shopping-card-container'>
      <h2>Shopping cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty, please add a Coin.</p>
      ) : (
        <>
          {items.map((item) => {
            const totalPrice = item.amount * item.price;
            return (
              <div key={item.name}>
                {item.amount} x {item.name} = {totalPrice.toFixed(2)}€
                <button className="btn btn-danger" onClick={() => onDelete(item.name)}>Remove</button>
              </div>
            );
          })}
          <h2>Total cost: {total}€</h2>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" className="form-control" onChange={handleChange} />
              {formErrors.fullName && <small className="text-danger">{formErrors.fullName}</small>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" className="form-control" onChange={handleChange} />
              {formErrors.address && <small className="text-danger">{formErrors.address}</small>}
            </div>
            <div className="form-group">
              <label>Credit Card Number</label>
              <input type="text" name="creditCard" className="form-control" maxLength="16" onChange={handleChange} />
              {formErrors.creditCard && <small className="text-danger">{formErrors.creditCard}</small>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
