

import './App.css';
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import ProductDetails from "pages/ProductDetails";
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Catalog />} />
      <Route path="products/:productId" element={<ProductDetails />} />
      <Route path="admin/" element={<Navigate to='/admin/products' />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="admin/auth/" element={<Navigate to='/admin/auth/login' />} />
      <Route path="admin/auth/*" element={<Auth />} />
    </Routes>
  );
}

export default App;
