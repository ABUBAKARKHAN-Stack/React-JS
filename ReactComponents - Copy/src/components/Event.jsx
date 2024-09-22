export const EventHandling = () =>{
    const handleClick = (event)=> {
        console.log(event);
           document.querySelector('body').style.backgroundColor = 'gold'
       }
    return(
        <>
        <div className="grid place-content-center place-items-center my-72 ">
        <button onClick={handleClick} className="  px-8 py-2 bg-slate-50 ">Click Me</button>
        <br />
        <button onClick={()=> handleClick()} className="px-8 py-2 bg-slate-50 ">Click Me</button>
        </div>
        </>
    )
}
