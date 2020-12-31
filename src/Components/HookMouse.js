import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const logMousePosition = e =>{
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition);

        return ()=>{
            console.log("Component unmounted");
            window.removeEventListener("mousemove", logMousePosition);  /// to cleanup the component, use a function and return it in within the function itself
        }
    }, [])                                   /// empty array means the effect is not dependent on any props and hence called only once
    return (
        <div>
            Hooks x - {x} Y - {y}
        </div>
    )
}

export default HookMouse
