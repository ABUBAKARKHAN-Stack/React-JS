import React, { useState } from 'react';

export const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber: '',
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phonenumber: '',
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
            <div className='text-white/80 font-bold  mt-4 text-[14px]'>Hello My Name is
                <span className='uppercase  text-yellow-400/90 font-[800]'>{user.firstname} {user.lastname} </span>
                My Email Address is
                <span className='text-yellow-400/90 font-[800]'>{user.email}</span>
                and my Phone Number is
                <span className='  text-yellow-400/90 font-[800]'>{user.phonenumber}</span>
            </div>
            <div className="flex flex-col p-5 bg-white/40 shadow-md rounded-md text-sm text-black/60 font-bold w-96 h-auto space-y-3">
                <h3 className="text-2xl font-semibold">Sign in</h3>
                <p>Please fill in this form to create an account</p>
                <form className="flex flex-col space-y-2 " onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" value={user.firstname} onChange={handleInputChange} className="border rounded p-1 bg-transparent font-medium hover:bg-blue-500/10 transition-all ease-in duration-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" id="lastname" value={user.lastname} onChange={handleInputChange} className="border rounded p-1 bg-transparent font-medium hover:bg-blue-500/10 transition-all ease-in duration-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} className="border rounded p-1 bg-transparent font-medium hover:bg-blue-500/10 transition-all ease-in duration-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} className="border rounded p-1 bg-transparent font-medium hover:bg-blue-500/10 transition-all ease-in duration-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="tel" name="phonenumber" id="phonenumber" value={user.phonenumber} onChange={handleInputChange} className="border rounded p-1 bg-transparent font-medium hover:bg-blue-500/10 transition-all ease-in duration-300" />
                    </div>
                    <button type="submit" className="bg-black/50 py-2 rounded-md text-white font-bold transition-all ease-linear duration-300 hover:bg-black/90">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
