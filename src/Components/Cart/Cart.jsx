import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, handlePaymentClick } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, total, isPaymentPage } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (cart.length === 0) {
      alert('Your Cart is Empty! Please add items to proceed.');
    } else {
      if (isPaymentPage) {
        // Go back to products page and toggle isPaymentPage to false
        dispatch(handlePaymentClick());  // Toggle state for payment page
        navigate('/');
      } else {
        // Proceed to payment page and toggle isPaymentPage to true
        dispatch(handlePaymentClick());  // Toggle state for payment page
        navigate('/payment');
      }
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(updateQuantity({ productId: item.id, delta: -1 }))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(updateQuantity({ productId: item.id, delta: 1 }))}
                  >
                    +
                  </button>
                </td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-cart">
          <p>No items in the cart</p>
        </div>
      )}
      <div className="cart-total">
        <h3>Total: </h3>
        <h2>₹{total}</h2>
      </div>
      <div className="payment-btn">
        <button onClick={handleButtonClick}>
          {isPaymentPage ? 'Back to Products' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
}

export default Cart;
