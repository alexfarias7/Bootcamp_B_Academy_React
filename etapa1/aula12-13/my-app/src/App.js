import { useState } from "react";


function App() {
  const [inputValue, setInputValue]= useState('')
  const [counter, setCounter]= useState(0)

  console.log(inputValue)
  
  const obj={
    a:1
  }
  const obj2={
    ...obj,
    b:2,
    c:3,
    d:4
  }

  const {b, ...obj3}=obj2
  console.log(obj3)

const arr= [1,2,3]
const arr2=arr.concat(25)
console.log(arr2)


  function handleChange(e){
    //console.log(typeof e.target.value)    
    setInputValue(e.target.value.replace(/\D+/g, ''))
    /*     if (!(Number.isNaN(Number(e.target.value)))){
      setInputValue(e.target.value)
    } */
  }
/*   return (
   <*>
    <form>
      <input value={inputValue} onChange={handleChange}></input>
      <button type="submit">Enviar</button>
    </form> 

    ); */

function handleCOunter(){
  setCounter(prevState=> prevState + 1)
}
    return(
    <>
   <Form inputValue={inputValue} handleChange={handleChange}/>
   <h3>{counter}</h3>
  <button type="submit" onClick={handleCOunter}>Contar</button>
   </>
   )
  }

function Form ({inputValue, handleChange}){
  return (
    <>
    <input value={inputValue} onChange={handleChange}></input>
    <button type="submit">Enviar</button>
    </>
  )
}

export default App;
