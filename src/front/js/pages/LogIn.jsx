import React from 'react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
    return (
        <div>
        <h1>Log In</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Log In</button>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </form>
    </div>
    );
}


