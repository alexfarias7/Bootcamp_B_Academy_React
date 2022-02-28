    
    const container = document.querySelector('[data-js="container"]')
    const p = React.createElement('p', null, ' react')
    const span = React.createElement('span', null, 'bootcamp')
    const h1= React.createElement('h1', {id:'title'}, span, p) 
     //* o createElement recebe trẽs argumentos:
     //* Primeiro argumento- é a tag que está sendo criada
     //* Segundo argumento -são as propriedades ou atributos que vãoser passada para a tag 
     //* Terceiro argumento - é  o children ou conteudo da tag criada



    ReactDOM.render(h1, container)