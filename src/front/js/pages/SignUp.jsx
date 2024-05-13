import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Context } from "../store/appContext";

export const SignUp = () => {
    const navigate = useNavigate()
    const { actions } = useContext(Context);

    const [signUpData, setSignUpData] = useState({
        email: '',
        name: '',
        password: '',
        age: '',
        region: '',
        timezone: '',
        languages: '',
        image: '',
        xbox: '',
        psn: '',
        steam: '',
        googlePlay: '',
        nintendo: '',
        epicId: '',
        bio: '',
        review: '',
        gender: ''
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let success = await actions.submitSignUpForm(signUpData);
            if (success) {
                navigate('/success');
            } else {
                setError('Failed to create user. Please try again.');
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
        }
    };


return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={store.signUpData.email} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={store.signUpData.password} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={store.signUpData.name} onChange={handleInputChange} required />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={store.signUpData.age} onChange={handleInputChange} required min="13" />
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={store.signUpData.gender} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="bio">Bio:</label>
                <textarea id="bio" name="bio" value={store.signUpData.bio} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label htmlFor="languages">Languages:</label>
                <select id="languages" name="languages" multiple value={store.signUpData.languages} onChange={handleInputChange}>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    {/* Add more languages as options */}
                </select>
            </div>

            <div>
                <label htmlFor="region">Region:</label>
                <input type="text" id="region" name="region" value={store.signUpData.region} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="timezone">Timezone:</label>
                <input type="text" id="timezone" name="timezone" value={store.signUpData.timezone} onChange={handleInputChange} />
            </div>
            {/* Add instructions for platform usernames */}
            <h2>Platform Usernames (optional):</h2>
            <p>Add your available usernames for the following platforms:</p>
            <div>
                <label htmlFor="xbox">Xbox:</label>
                <input type="text" id="xbox" name="xbox" value={store.signUpData.xbox} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="psn">PSN:</label>
                <input type="text" id="psn" name="psn" value={store.signUpData.psn} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="steam">Steam:</label>
                <input type="text" id="steam" name="steam" value={store.signUpData.steam} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="googlePlay">Google Play:</label>
                <input type="text" id="googlePlay" name="googlePlay" value={store.signUpData.googlePlay} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="nintendo">Nintendo:</label>
                <input type="text" id="nintendo" name="nintendo" value={store.signUpData.nintendo} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="epicId">Epic ID:</label>
                <input type="text" id="epicId" name="epicId" value={store.signUpData.epicId} onChange={handleInputChange} />
            </div>


            <button type="submit">Sign Up</button>
        </form>
    </div>
);
};



