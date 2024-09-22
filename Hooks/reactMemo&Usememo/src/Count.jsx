import React, { memo , useRef } from 'react'
function Count() {
    const count = useRef(0)
    console.log(count.current++);
    return (
        <div>I am Rerendrring WHY : {')?'}</div>
    
    )
}

export default React.memo(Count)