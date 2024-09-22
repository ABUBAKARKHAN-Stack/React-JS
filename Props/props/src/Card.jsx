export const Card = ({name= 'Abubakar Khan' , image = 'https://codewithabubakar.netlify.app/assests/image/Nav-logo.jpeg'})=>{
   return(
    <>
    <div className="container w-full h-screen flex justify-center items-center flex-col">
        <div className="h-64 w-60 bg-[#18181b] p-2 rounded-lg text-start">
            <img src={image} alt=""  className="w-[40%] rounded-full"/>
            <div className="text-white flex justify-center items-start flex-col gap-2">
            <p>HELLO!</p>
            <p>I am {name}</p>
            <p>Front End Web Developer</p>
            <button className="border-2 border-white py-2 px-5  mx-auto">Contact Me</button>
        </div>
        </div>
        
    </div>
    </>
   )
}