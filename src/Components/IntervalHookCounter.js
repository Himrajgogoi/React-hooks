import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = ()=>{
       setCount(count+1);
    };
    
    useEffect(()=>{
        const interval = setInterval(tick, 1000);

        return ()=>{
            clearInterval(interval);
        }
    }, [count]);                 //think twice before specifying an empty dependency array as we gotta be very sure that there are no dependencies

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
