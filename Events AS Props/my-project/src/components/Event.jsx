export const Event = () => {
    return (
        <>
            <div className="w-full h-screen flex gap-2 justify-center items-center">
                <button className="px-8 py-2 bg-[#ebeb67]" onClick={() => { HandleClickMouse('Abubakar') }}>Click Me</button>
                <button className="px-8 py-2 bg-[#ebeb67]" onMouseEnter={HandleHover}>Hover Me</button>
                <button className="px-8 py-2 bg-[#ebeb67]" onClick={() => { HandleGreet('Abubakar') }}>Greet</button>
            </div>
        </>
    )
}
function HandleClickMouse(user) {
    alert(`Hello ${user} I AM Clicked`)
}

function HandleHover() {
    alert('I am Hovered')
}



function HandleGreet(user) {
    document.querySelector('body').style.backgroundColor = '#000028'
    alert(`Welcome ${user} To My Website..`)
}