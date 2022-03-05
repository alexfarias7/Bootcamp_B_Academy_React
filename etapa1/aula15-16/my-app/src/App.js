import {useEffect} from 'react'


const url = 'https://ws.apicep.com/cep.json/?code=[CEP]'

function App() {
  console.log('montando o componente')
  
  useEffect(()=>{

    async function getCep(){
      const response = await fetch(url.replace('[CEP]', '06233-030'))
      const json = await response.json()
      console.log(json)
    }
    getCep()

  })
  

  
    return (
      <>
    <button> Buscar CEP</button>
      </>
    )
 }

 export default App