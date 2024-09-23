import React from 'react'

function Contact() {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className='w-full h-full max-w-screen-2md mx-auto px-8 xl:px-0'>
      <div className='w-full flex flex-col h-full justify-center items-center py-8 gap-y-4'>

        <div className='text-2xl font-medium'>Contact Us </div>
        <form action={handleFormSubmit} className='w-3/4 flex justify-center items-center text-xs flex-col gap-y-4'>
          <input
            type="text"
            name="name"
            placeholder='Enter Your Name'
            className='lg:w-1/2 sm:w-3/4 w-full bg-transparent rounded p-2 placeholder:font-light placeholder:text-white/50 outline-none tracking-wider border '
            autoComplete='off'
            required
          />

          <input
            type="email"
            name="email"
            placeholder='Enter Your Email'
            className='lg:w-1/2 sm:w-3/4 w-full bg-transparent rounded p-2 placeholder:font-light placeholder:text-white/50 outline-none tracking-wider border '
            required
            autoComplete='off'
          />
          <textarea
            placeholder='Enter Your Message'
            name="message"
            cols="30"
            rows="10"
            className='lg:w-1/2 sm:w-3/4 w-full bg-transparent rounded p-2 placeholder:font-light placeholder:text-white/50 tracking-wider border outline-none '
            required
            autoComplete='off'>
          </textarea>

          <button
            type='submit'
            className='lg:w-1/2 sm:w-3/4 w-full bg-zinc-800 font-[200] text-start tracking-wider text-[11px] gap-x-1 p-2 border-[1.5px] rounded-xl'>
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact