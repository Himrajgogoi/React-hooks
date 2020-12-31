import React, {useState, useEffect} from 'react'

function EffectHook() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=> {
        console.log("useEffect - Updating ");
        document.title = `You clicked ${count} times`;
    }, [count]);                                           /// for running the useEffect conditionally, we must pass a second parameter which is an array of props to watch for
    return (
        <div>
            <input type="text" value = {name} onChange={e=> setName(e.target.value)}/>
            <button onClick={()=> setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default EffectHook
