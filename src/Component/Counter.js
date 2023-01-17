import React, { useMemo, useState } from 'react'

function Counter(){
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne((count) => count + 1)
    }

    const incrementTwo = () => {
        setCounterTwo((count) => count + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 20000000) i++
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>CounterOne - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter