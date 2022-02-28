    
/*     const container = document.querySelector('[data-js="container"]')
    const p = React.createElement('b', null, ' react')
    const span = React.createElement('span', null, 'bootcamp')
    const h1= React.createElement('h1', {id:'title'}, 
    React.createElement('span', null, 'bootcamp'),
    React.createElement('b', null, ' react')
    
    )

 */
const h1 = (<h1 id='title' data-js='titulo-js'>

<span>bootcamp</span>
<b> React</b>
</h1>)
     //* o createElement recebe trẽs argumentos:
    //* Primeiro argumento- é a tag que está sendo criada
     //* Segundo argumento -são as propriedades ou atributos que vãoser passada para a tag 
     //* Terceiro argumento - é  o children ou conteudo da tag criada

     const container = document.querySelector('[data-js="container"]')
      ReactDOM.render(h1, container)