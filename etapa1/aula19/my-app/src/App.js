import {useEffect, useState} from 'react'
import { createGlobalStyle } from 'styled-components'
import Counter from './Counter'
import Cep from './Cep'

const GlobalStyle = createGlobalStyle`
body{
  background:orange;
}
`
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
<GlobalStyle></GlobalStyle>
<Counter counter={counter} setCounter={setCounter} color={'black'}/>
<Cep cep={cep} setCep={setCep}/>
</>
)

}



 export default App