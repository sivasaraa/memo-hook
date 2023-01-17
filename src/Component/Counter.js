import React, { useState } from 'react'

function Counter(){
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne((count) => count + 1)
    }

    const incrementTwo = () => {
        setCounterTwo((count) => count + 1)
    }

    const isEven = () => {
        return counterOne % 2 == 0
    }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>CounterOne - {counterOne}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter