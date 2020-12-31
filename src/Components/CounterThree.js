import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action)=>{
    switch(action){
       case "increment":
           return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;
        default:
            return state
    }
    
}

function CounterThree() {
    const [count, dispatch]= useReducer(reducer, initialState);
    const[countTwo, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch("increment")}>Increment</button>
            <button onClick={()=> dispatch("decrement")}>Decrement</button>
            <button onClick={()=> dispatch("reset")}>Reset</button>

            <div>Count2 - {countTwo}</div>
            <button onClick={()=> dispatch2("increment")}>Increment2</button>
            <button onClick={()=> dispatch2("decrement")}>Decrement2</button>
            <button onClick={()=> dispatch2("reset")}>Reset2</button>
        </div>
    )
}

export default CounterThree
