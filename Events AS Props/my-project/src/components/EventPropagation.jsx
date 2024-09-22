export const EventPropagation = () => {
    const body = document.querySelector('body')
    function background(Clickeddiv, event, color, timeout) {
        setTimeout(() => {
            alert(`${Clickeddiv} Div Clicked! ${color} Color will be applied to the body.`);
            console.log(event);
            body.style.backgroundColor = color
            body.style.transition = 'all 1s linear'
            console.log(body);
            console.log(timeout);
        }, timeout);

    }
    const HandleChild = (event) => {
        background('Child', event, 'Navy', 18000)
    }
    const HandleParent = (event) => {
        background('Parent', event, 'Gold', 10000)
    }
    const HandleGrandParent = (event) => {
        background('Grand Parent', event, 'White', 2000)
    }
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="bg-sky-200 py-5 px-5 border-4 border-white rounded cursor-pointer" onClickCapture={HandleGrandParent}>
                    <div className="bg-yellow-200 py-8 px-8 border-2 border-white rounded " onClickCapture={HandleParent}>
                        <div className="bg-green-200 py-5 px-20 border-2 border-white rounded" onClickCapture={HandleChild}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
