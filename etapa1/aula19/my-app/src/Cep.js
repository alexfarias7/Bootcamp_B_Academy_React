import styledComponents from "styled-components"
function Cep ({ cep, setCep }) {
    function handleSubmit (e) {
      e.preventDefault()
      setCep(e.target.elements.campoCep.value)
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <Input type='text' name='campoCep' className='input' />
          <button type='submit'>Busca CEP</button>
        </form>
      </>
    )
  }

   const Input = styledComponents.input`
   background:gray;
   color:white
   `
  export default Cep