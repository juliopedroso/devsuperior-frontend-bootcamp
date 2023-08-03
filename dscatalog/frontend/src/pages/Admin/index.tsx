import './styles.css';
import NavBar from "./NavBar";
import { Route, Routes } from 'react-router-dom';
import Users from './User';
import { PrivateRoute } from 'components/PrivateRoute';

const Admin = () => {

    return (

        <div className="admin-container">
            <NavBar />
            <div className="admin-content">
                <Routes>
                    <Route path="products" element={
                        <PrivateRoute>
                            <h1>Product CRUD</h1>
                        </PrivateRoute>
                    } />
                    <Route path="categories" element={
                        <PrivateRoute>
                            <h1>Category CRUD1</h1>
                        </PrivateRoute>} />
                    <Route path="users" element={
                        <PrivateRoute>
                            <Users />
                        </PrivateRoute>} />
                </Routes>
            </div>

        </div >
    );
};

export default Admin;