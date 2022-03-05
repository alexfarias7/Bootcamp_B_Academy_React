function Color (){
    return(
        <>
        <label htmlFor='color' >Cor</label>
        <input type={'color'} id='color' autoFocus name="color"></input>
        </>
    )
}


function Image (){

    return (
        <>
        <label htmlFor="image" >Imagem URL</label>
        <input type={'url'} id='image' name="image"></input>
        </>
    )
}


function BrandModel (){
    return(
          <>
        <label htmlFor='brand-model' >Marca/modelo</label>
        <input type={'text'} id='brand-model' name="brandModel"></input>
        </>
    )
}


function Year (){
    return(
        <>
        <label htmlFor='year' >Ano</label>
        <input type={'number'} id='year' name="year"></input>
        </>
    )
}
function Plate (){
    return(
        <>
        <label htmlFor='plate' >PLate</label>
        <input type={'text'} id='plate' name="plate"></input>
        </>
    )
}


function Button(){
    return (
        <>
        <button type="submit">Cadastrar</button>
        </>
    )
}


export  {Image,BrandModel,Year,Plate,Color, Button}