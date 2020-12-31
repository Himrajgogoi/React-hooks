import React, {useReducer}from 'react';
import './App.css';
import ParentComponent from './Components/Callback/ParentComponent';
import ClassTimer from './Components/ClassTimer';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import ContextComponentC from './Components/ContextComponentC';
import CounterOne from './Components/CustomHooks/CounterOne';
import CounterThree from './Components/CounterThree';
import CounterTwo from './Components/CustomHooks/CounterTwo';
import Counter_Memo from './Components/Counter_Memo';
import DocTitleOne from './Components/CustomHooks/DocTitleOne';
import DocTitleTwo from './Components/CustomHooks/DocTitleTwo';
import DataFetching from './Components/DataFetching';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import FocusInput from './Components/FocusInput';
import HookTimer from './Components/HookTimer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import UserForm from './Components/CustomHooks/UserForm';


export const userContext = React.createContext();
export const channelContext = React.createContext();

export const CountContext = React.createContext();

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
function App() {
  const[count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
      {/* <userContext.Provider value={"Himraj"}>
        <channelContext.Provider value={"Guwahati"}>
          <ContextComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <ClassTimer/>
       <HookTimer/> */}
       {/* <DocTitleOne/>
       <DocTitleTwo/> */}
       {/* <CounterOne/>
       <CounterTwo/> */}
       <UserForm/>
    </div>
    </CountContext.Provider>    
  );
}

export default App;
