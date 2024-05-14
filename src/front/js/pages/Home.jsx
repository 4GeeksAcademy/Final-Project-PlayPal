import React, { useState, useContext } from 'react';
import { Room } from '../component/Room.jsx'
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <div className="home-header">
                <h1>Find your next pals to play</h1>
                <input type="text" placeholder="Search.."></input>
            </div>
                <Room />
            <div>
                
            </div>
        </div>
    );
};