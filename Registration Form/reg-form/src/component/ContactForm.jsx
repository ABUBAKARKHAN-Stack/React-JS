import { useState } from 'react';

export const ContactForm = () => {
    // const [user, setUser] = useState(
    //     {
    //         username: '',
    //         password: '' ,
    //         message: '',
    //     }
    // )
    const [contactinfo, setContactInfo] = useState({
        username: '',
        email: '',
        message: '',
    })
    const initialWords = 200
    const [wordscount, setWordsCount] = useState(initialWords)
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setContactInfo((prevData) => ({ ...prevData, [name]: value }))
        if (name === 'message') {
            setWordsCount(initialWords - value.length)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(contactinfo);
        setContactInfo({
            username: '',
            email: '',
            message: ''
        })
        setWordsCount(200)
    }
    const containerStyle = {
        backgroundImage: "url('./public/image.jpeg')",
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image within the container
    };

    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center  font-sans"
            style={containerStyle}
        >

            <div className="flex flex-col p-5  bg-black/50 transition-colors ease-in duration-300 hover:bg-[#1a80c2]/55  overflow-hidden rounded-md text-sm text-white font-medium  w-[95vw] sm:w-96 md:w-2/5 h-auto space-y-3"  style={{ boxShadow: 'black 0px 0px 4px 1px'}}>
                <h1 className='text-center sm:text-3xl text-xl font-bold underline  '>Contact Form</h1>
                <form onSubmit={handleFormSubmit} className='flex flex-col space-y-3 '>
                    <div className="flex flex-col space-y-0.5">
                        <label htmlFor="username">Username*</label>
                        <input type="text" name="username" id="username" value={contactinfo.username} required autoComplete='off' placeholder='Enter Your Name' onChange={handleInputChange} className='py-3 px-2 text-white transition-colors ease-in duration-300  outline-none rounded-md bg-transparent hover:bg-black/20 border placeholder:text-white placeholder:font-light' />
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" value={contactinfo.email} required autoComplete='off' placeholder='Enter Password' onChange={handleInputChange} className='py-3 px-2 text-white transition-colors ease-in duration-300  outline-none rounded-md bg-transparent hover:bg-black/20 border placeholder:text-white placeholder:font-light'/>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <label htmlFor="messaage">
                            Message*
                        </label>       
                        <textarea name="message" id="message" rows={4} maxLength={initialWords} value={contactinfo.message} required autoComplete='off' placeholder='Enter Message For More Details' onChange={handleInputChange} className='py-3 px-2 text-white transition-colors ease-in duration-300  outline-none rounded-md bg-transparent hover:bg-black/20 border placeholder:text-white placeholder:font-light'>
                        </textarea>
                        <p>{wordscount}/{initialWords}</p>
                    </div>
                    <button type="submit" className="bg-transparent border py-2 rounded-md  text-white font-bold transition-all ease-linear duration-300 hover:bg-black/50 hover:scale-[1.01] hover:border-transparent">Send</button>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;
