import React from "react";
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="navbar px-1 py-1 row justify-content-between align-items-center">
            <div className="brand py-1 col-xxl-1 d-flex">
                <p className="text-white fs-6 fw-semibold font-family-Inter col-12 m-0 px-3 py-2">PlayPal</p>
            </div>
            <div className="nav-links col-xxl-2 row align-items-center d-flex">
                <Link to="/rooms" className="nav-link px-1 py-1 col-4 d-flex">
                    <p className="text-white fs-6 fw-normal font-family-Inter col-8 m-0 px-3 py-2">Rooms</p>
                </Link>
                <Link to="/games" className="nav-link px-1 py-1 col-4 d-flex">
                    <p className="text-secondary fs-6 fw-normal font-family-Inter col-8 m-0 px-3 py-2">Games</p>
                </Link>
                <div className="login-link px-1 py-1 col-3 d-flex" onClick={handleLoginClick}>
                    <p className="text-secondary fs-6 fw-normal font-family-Inter col-7 m-0 px-3 py-2">Log In</p>
                </div>
            </div>
        </div>
    );
}
