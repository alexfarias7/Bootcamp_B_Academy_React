import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);


  return (
    <>
      {counter>0 && <Title>{counter}</Title>}
      <Buttons setCounter={setCounter}/>
    
    </>
  );
}

function Title ({children}){
  return(
    <h1>{children}</h1>
  )
}

function Buttons({setCounter}){

  function Increment() {
    setCounter((prevState) => prevState + 1);
  }
  function Decrement() {
    setCounter((prevState) => prevState -1);
  }
  return(
    <>
    <button type="submit" onClick={Increment}>Incrementar </button>
    <button type="submit" onClick={Decrement}>Decrementar </button>
    </>
  )
}
export default App;
