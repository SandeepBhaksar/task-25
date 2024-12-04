import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/body/products';
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/task-25">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
