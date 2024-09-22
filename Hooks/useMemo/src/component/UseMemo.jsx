import React, { useState, memo, useMemo } from 'react'

export const ExpensiveSum = memo(() => {
    const sum = () => {
        let index = 0
        for (index = 0; index <= 100000000; index++) {
            index = index + 1
        }
        return index;
    }
    const total = useMemo(() => sum(), [])
    return (
        <><p>Sum : {total}</p></>
    )
});



function UseMemo() {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ExpensiveSum />
            <div>Count : {count}</div>
        </>
    )
}

export default UseMemo