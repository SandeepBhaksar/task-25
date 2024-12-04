import React from 'react';
import './products.css';
import redtape01 from '../../assets/images/red-tape01.jpg';
import asianTarzan11 from '../../assets/images/asian-tarzan-11.jpg';
import sparxmesh from '../../assets/images/sparx-mesh.jpg';
import lqdcell from '../../assets/images/puma-LQDCELL.jpg';
import genetic_speckle from '../../assets/images/puma-genetics-speckle.jpg';
import genetics from '../../assets/images/puma-genetics.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, handlePaymentClick } from '../../Redux/cartSlice';
import Payment from '../Payment/Payment';
import Cart from '../Cart/Cart';

const Products = () => {
  const dispatch = useDispatch();
  const { isPaymentPage } = useSelector((state) => state.cart);

  const productList = [
    { id: 1, name: 'Red Tape Athleisure Shoes for Men', price: 2699, img: redtape01 },
    { id: 2, name: "ASIAN Men's TARZAN-11 Casual Sneaker Shoes", price: 719, img: asianTarzan11 },
    { id: 3, name: "SPARX Men's Mesh Running Shoe", price: 909, img: sparxmesh },
    { id: 4, name: "Puma Men's LQDCELL Method Training Shoe", price: 3499, img: lqdcell },
    { id: 5, name: "Puma Unisex Genetics Speckle Basketball Shoe", price: 5499, img: genetic_speckle },
    { id: 6, name: "Puma Unisex Genetics Basketball Shoe", price: 4499, img: genetics },
  ];

  return (
    <div className='main'>
      <div className="payment">
    <div className="container">
      {isPaymentPage ? (
        <Payment />
      ) : (
        <div className="products">
          <h2>Products</h2>
          <div className="product-grid">
            {productList.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    <div className="cart">
          <Cart />
    </div>
        </div>
  );
};

export default Products;
