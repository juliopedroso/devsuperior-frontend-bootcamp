import './styles.css';
import NavBar from "./NavBar";
import { Route, Routes } from 'react-router-dom';

const Admin = () => {

    return (

        <div className="admin-container">
            <NavBar />
            <div className="admin-content">
                <Routes>
                    <Route path="products" element={(<h1>Product CRUD</h1>)} />
                    <Route path="categories" element={(<h1>Category CRUD</h1>)} />
                    <Route path="users" element={(<h1>User CRUD</h1>)} />
                </Routes>
            </div>

        </div>
    );
};

export default Admin;