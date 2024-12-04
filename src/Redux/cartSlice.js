import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
  isPaymentPage: false,
  cardNumber: '',
  paymentMethod: '',
  expiryDate: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      state.total += product.price;
    },
    updateQuantity: (state, action) => {
      const { productId, delta } = action.payload;
      const updatedCart = state.cart
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter(item => item.quantity > 0);

      state.cart = updatedCart;

      state.total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    handlePaymentClick: (state) => {
      // Toggle only the page state, no need for alert
      state.isPaymentPage = !state.isPaymentPage;
    },
    handleCardNumberInput: (state, action) => {
      let value = action.payload.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1-');
      if (value.endsWith('-')) {
        value = value.slice(0, -1);
      }
      state.cardNumber = value;
    },
    handleExpiryDate: (state, action) => {
      let value = action.payload.replace(/[^0-9]/g, '');
      if (value.length > 2) {
        const month = value.slice(0, 2);
        const year = value.slice(2, 6);
        value = parseInt(month) > 12 ? '12' + year : `${month}/${year}`;
      }
      state.expiryDate = value.slice(0, 7);
    },
    handlePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    resetPaymentPage: (state) => {
      state.isPaymentPage = false;
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  handlePaymentClick,
  handleCardNumberInput,
  handleExpiryDate,
  handlePaymentMethod,
  resetPaymentPage,
} = cartSlice.actions;

export default cartSlice.reducer;
