import React from "react";
import { useNavigate } from 'react-router-dom';
/* import { Link } from "react-router-dom"; */

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Navegar a la página de login
        navigate('/login');
      };

    return (
    <div className="px-1 py-1 row justify-content-between align-items-center">
        <div className="py-1 col-xxl-1 d-flex">
            <p className="text-white fs-6 fw-semibold font-family-Inter col-12 m-0 px-3 py-2">PlayPal</p>
        </div>
        <div className="col-xxl-2 row align-items-center d-flex">
            <div className="px-1 py-1 col-4 d-flex">
                <p className="text-white fs-6 fw-normal font-family-Inter col-8 m-0 px-3 py-2"> Rooms</p>
            </div>
            <div className="px-1 py-1 col-4 d-flex">
                <p className="text-secondary fs-6 fw-normal font-family-Inter col-8 m-0 px-3 py-2">Games</p>
            </div>
            <div className="px-1 py-1 col-3 d-flex" onClick={handleLoginClick} >
                <p className="text-secondary fs-6 fw-normal font-family-Inter col-7 m-0 px-3 py-2">Log In</p>
            </div>
        </div>
    </div>
    )
}