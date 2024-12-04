import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCardNumberInput, handleExpiryDate, handlePaymentMethod } from '../../Redux/cartSlice';
import './Payment.css';
import Cart from '../Cart/Cart';

const Payment = () => {
  const { cardNumber, paymentMethod, expiryDate } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className='payment-page'>
        <h2>Payment</h2>
        <form>
          <div className="radio-02">
            <div className='radio'>
              <input 
                type="radio" 
                id="card-payment" 
                name="payment-method"  
                onChange={(e) => dispatch(handlePaymentMethod(e.target.value))} 
                checked={paymentMethod === "card-payment"} 
                value="card-payment"
              />
              <label htmlFor="card-payment">Pay with Card</label>
            </div>
            <div className="radio">
              <input 
                type="radio" 
                id="cod" 
                name="payment-method" 
                onChange={(e) => dispatch(handlePaymentMethod(e.target.value))} 
                checked={paymentMethod === "cod"} 
                value="cod"
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>

          {paymentMethod === "card-payment" && (
            <div className='card-details'>
              <div className="card-name">
                <label htmlFor="card-number">Enter Your Card Number :</label>
                <input
                  type="text" 
                  id="card-number" 
                  value={cardNumber} 
                  onChange={(e) => dispatch(handleCardNumberInput(e.target.value))} 
                  maxLength={19} 
                  minLength={19} 
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
              </div>

              <div className="card-number">
                <label htmlFor="expiry-date">Enter Your Card's Expiry Date :</label>
                <input 
                  type="text" 
                  id='expiry-date' 
                  onChange={(e) => dispatch(handleExpiryDate(e.target.value))} 
                  maxLength={7} 
                  value={expiryDate} 
                  placeholder='MM/YYYY' 
                />
              </div>

              <div className="card-cvv">
                <label htmlFor="cvv">Enter Your Card CVV Number :</label>
                <input type="text" maxLength={3} minLength={3} />
              </div>
            </div>
          )}
        </form>

        <div className="confirm-payment">
          <button>Confirm Payment</button>
        </div>
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Payment;
