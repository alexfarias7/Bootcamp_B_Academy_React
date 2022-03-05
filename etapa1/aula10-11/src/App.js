import {useState} from 'react'

function App(){
/*     const state = useState(25)
    const counter= state[0]
    const setCounter = state[1] */
 
    const [counter, setCounter] = useState(null);
    const [name, setName] = useState('alex farias')
    function increment(){
        setCounter(counter+1)

    }
    function decrement(){
        setCounter(counter - 1)
    }
    function sayHi(){
        setName(`Ola ${name}`)
    }

    return (
        <>
     {/*    <h1>{counter===null? "contador vazio": `${counter}`}</h1> */}
       <h1>
       {counter===null && 'contador vazio'}
       {counter!==null&& `CONTADOR: ${counter}`}

       </h1>
        <button onClick={increment}>
            +
        </button>
        <button onClick={decrement}>
            -
        </button>
        
        <h2>{name}</h2>
        <button onClick={sayHi}>Diga oi</button>
        </>
    )
}

export default App