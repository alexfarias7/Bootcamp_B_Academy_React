
import styledComponents from "styled-components"
function Counter({counter, setCounter, color}){
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
        <Input type='text' name='campoCep'   color={color}/>
        <Button onClick={()=> setCounter(c=> c+1)}>+</Button>
        <Button onClick={()=> setCounter(c=> c-1)}>-</Button>
       
        </>
    
      )
    }

 /*    function Input({type, name,color}){

    } */


    const Input = styledComponents.input`
    background-color:${(props)=>props.color};
    color:white;
    `
    const Button = styledComponents.button`
    
    `
    export default Counter