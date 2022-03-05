import {useEffect, useState} from 'react'

function getCepUrl(cep){
  return 'https://ws.apicep.com/cep.json?code=[CEP]'.replace('[CEP]', cep)
}

function App(){
  const [counter, setCounter] = useState(0)
  const [cep, setCep]= useState(null)

  useEffect(()=>{
    function searCEP(){
      if (cep===null){
        return
      }
      fetch(getCepUrl(cep))
      .then(result=> result.json())
      .then(result=> console.log(result))
    }

    searCEP()
  },[cep])

return (
<>
<Counter counter={counter} setCounter={setCounter}/>
<Cep cep={cep} setCep={setCep}/>
</>
)

}


function Counter({counter, setCounter}){
/*   useEffect(()=>{
    document.title = 'titulo do app'


         const id = setInterval(()=>{
      setCounter(c=> c+1)
    }, 1000)

    return ()=>{
      console.log(id)
      clearInterval(id)
    } 
  }) */

  return(
    <>
    <h1>Contador: {counter}</h1>
    <button onClick={()=> setCounter(c=> c+1)}>+</button>
    <button onClick={()=> setCounter(c=> c-1)}>-</button>
   
    </>

  )
}


function Cep ({ cep, setCep }) {
  function handleSubmit (e) {
    e.preventDefault()
    setCep(e.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='campoCep' />
        <button type='submit'>Busca CEP</button>
      </form>
    </>
  )
}
 export default App