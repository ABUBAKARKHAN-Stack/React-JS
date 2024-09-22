import React from 'react'

function Button({
    type = "button",
    className = "",
    children,
    ...props
}) {
    return (
        <button {...props} type={type} className={` py-2 px-6 text-xs  font-semibold ${className}`}>{children}</button>
    )
}

export default Button