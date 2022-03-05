import { useState } from "react";

function Form() {
  function Cadastrar(e) {
    e.preventDefault();

    console.log(name)
    console.log(password)
    console.log("cadastro realizado");
  }

  const [name, setName] = useState('valor inicial')
  const [password, setPassword] = useState('valor inicial')

  const [value, setValue]= useState(0)
  const [user, setUser] = useState({
      id:1,
      name:'alex',
      photo:'https://static-cse.canva.com/blob/759728/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.9a277e41.avif'
  })
  function aumentar(){
      setValue(value +1)
  }
  return (
    <>

    <div>adcionar no carrinho: {value} </div>
    <button onClick={aumentar}> +1</button>
    <hr/>
    nome do usuario: {user.name}
    foto: {user.photo}
    </>
    
 );
}


export default Form;
