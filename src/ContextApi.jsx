import React,{ createContext, useContext, useState} from 'react';
import './contentApi.css';

// create context to update count state and function
const CountContext = createContext();
function CountProvider({ children}) {
    const [count, setCount] = useState(0);
    //function increment
    const increment = () => {
        setCount(count + 1)
    }
    // function decrement
    const decrement = () => {
        setCount(count - 1)
    }
    // function Reset
    const reset = () => {
        setCount(0);
    }
  return (
   <CountContext.Provider value={{count, increment, decrement, reset}}>
    {children}
   </CountContext.Provider>
  );
} 

function useCount(){
    const context = useContext(CountContext)
    return context;
}

const Counter = () =>{
    const {count, increment, decrement,reset} = useCount();
    return(
        <div className='counter-container'>
            <h1>{count}</h1>
            <button className='button btn-1' onClick={increment}>+</button>
            <button className='button btn-2' onClick={decrement}>-</button>
            <button className='button btn-3' onClick={reset}>Reset</button>
        </div>
    );
};

const myApp=() => {
    return(
        <div className='tap-counter'>
            <h1 className='title'>React Counter App</h1>
            <p className='sub-title'>
                A Simple counter Application using context api.
            </p>
            <CountProvider>
                <Counter/>
            </CountProvider>
        </div>
    );
};

export default myApp;