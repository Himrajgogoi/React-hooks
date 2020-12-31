import React, {useState, useMemo} from 'react'

function Counter_Memo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = ()=>{
        setCounterOne(counterOne+1);
    };

    const incrementTwo = ()=>{
        setCounterTwo(counterTwo+1);
    };
    
    const isEven = useMemo( ()=>{      ///useMemo returns a cached value if no change is witnessed. it is used to cache the result of an invoked func
        let i = 0;
        while(i<2000000000) i++
        return counterOne%2 == 0;
    }, [counterOne])

    return (
        <div>
            <button onClick={incrementOne}>Count One- {counterOne}</button>
            <span>{isEven ? "even": "odd"}</span>
            <button onClick={incrementTwo}>Count Two- {counterTwo}</button>
        </div>
    )
}

export default Counter_Memo
