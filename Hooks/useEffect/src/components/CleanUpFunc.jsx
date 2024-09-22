import { useEffect, useState } from "react"

export const Cleanup = () => {
    const [width, setWidth] = useState(window.screen.width)
    const actualWidth = () => { setWidth(innerWidth) }
    useEffect(() => {
        window.addEventListener('resize', actualWidth)
        return (() => {
            window.removeEventListener('resize', actualWidth)
        })
    }, [])
    return (
        <div className="h-screen w-full grid place-content-center place-items-center gap-4 bg-blue-200">
            <p className="sm:text-5xl text-xl font-extrabold">Width of Screen is:</p>
            <div className="sm:text-8xl text-2xl font-bold">{width}</div>
        </div>
    )
}