import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Cart } from './components/pages/cart/cart.lazy';
import { ErrorPage } from './components/pages/errorPage/errorPage';
import { HomePage } from './components/pages/home/home.lazy';
import { Login } from './components/pages/login/login';
import { ProductDetails } from './components/pages/productDetails/productDetails';
import { Header } from './components/shared/header/header.lazy';
import { Spinner } from './components/shared/spinner/spinner';
import { setCartData } from './redux/cartSlice';
import { RootState } from './redux/store';
import { useGetProductsQuery } from './services/productsApi';
import './assets/styles/reset.css';
import './assets/styles/main.css';

function App() {
  const { data } = useGetProductsQuery({});
  const userData = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setCartData(data?.products));
  }, [data]);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!userData ? <Login /> : <ErrorPage />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
