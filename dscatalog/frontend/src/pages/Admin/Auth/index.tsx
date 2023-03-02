
import './styles.css';
import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Routes } from 'react-router-dom';

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Divulge seus produtos no DS Catalog</h1>
                <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
                <AuthImage />
            </div>
            <div className="auth-form-container">
                <Routes>
                    <Route path="login" element={<h1>Card de Login</h1>} />
                    <Route path="signup" element={<h1>Card de Signup</h1>} />
                    <Route path="recover" element={<h1>Card de Recover</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;