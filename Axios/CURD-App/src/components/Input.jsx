import React, { forwardRef, useId } from 'react'

function Input({
    label,
    type = "text",
    name,
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} {...props} id={id} name={name} ref={ref} className={`${className} transition-colors duration-200 ease-linear focus:ring-1 focus:ring-white outline-none  w-40 text-xs p-2 rounded-[2px]`} />
        </div>
    )
}

export default forwardRef(Input)