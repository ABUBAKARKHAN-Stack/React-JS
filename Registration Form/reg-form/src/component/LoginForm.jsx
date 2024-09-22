import React, { useState } from 'react';

export const LoginForm = () => {
    const [user, setUser] = useState(
        {
            username: '',
            password: ''
        }
    )
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        setUser({
            username: '',
            password: ''
        })
    }
    const containerStyle = {
        backgroundImage: "url('./public/image.jpg')",
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image within the container
    };

    return (
        <div
            className="w-full h-screen grid place-items-center font-sans"
            style={containerStyle}
        >

            <div className="flex flex-col p-5 bg-white/40 shadow-md rounded-md text-sm text-black/60 font-bold  w-[95vw] sm:w-96 md:w-2/5 h-auto space-y-3">
                <h1 className='text-center text-2xl'>Login Form</h1>
                <form onSubmit={handleFormSubmit} className='flex flex-col space-y-3 '>
                    <div className="flex flex-col">
                        <label htmlFor="username">Username*</label>
                        <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} className='py-2 px-1 rounded-md' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} className='py-2 px-1 rounded-md'/>
                    </div>
                    <button type="submit" className="bg-black/50 py-2 rounded-md text-white font-bold transition-all ease-linear duration-300 hover:bg-black/90">Login</button>
                </form>

            </div>
        </div>
    );
};

export default LoginForm;
