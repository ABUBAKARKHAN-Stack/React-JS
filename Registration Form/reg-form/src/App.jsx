import React, { useState } from 'react';

export const App = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")

  const handleInputChange = (e) => {
    const { value, name } = e.target
    switch (name) {
      case 'firstname': setFirstName(value)
        break;
      case 'lastname': setLastName(value)
        break;
      case 'email': setEmail(value)
        break;
      case 'password': setPassword(value)
        break;
      case 'phonenumber': setPhoneNumber(value)
        break;

    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
     const formData = {
      firstname,
      lastname,
      email,
      password,
      phonenumber
     }
     console.log(formData);
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setPhoneNumber('')
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
      <div className='text-white font-semibold'>Hello My Name is {firstname} {lastname}. My Email Address is {email} and my Phone Number is {phonenumber}</div>
      <div className="flex flex-col p-5 bg-white/40 shadow-md rounded-md text-sm text-black/60 font-bold w-96 h-auto space-y-3">
        <h3 className="text-2xl font-semibold">Sign in</h3>
        <p>Please fill in this form to create an account</p>
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" value={firstname} onChange={handleInputChange} className="border rounded p-1 bg-transparent" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" value={lastname} onChange={handleInputChange} className="border rounded p-1 bg-transparent" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleInputChange} className="border rounded p-1 bg-transparent" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handleInputChange} className="border rounded p-1 bg-transparent" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="tel" name="phonenumber" id="phonenumber" value={phonenumber} onChange={handleInputChange} className="border rounded p-1 bg-transparent" />
          </div>
          <button type="submit" className="bg-black/50 py-2 rounded-md text-white font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
