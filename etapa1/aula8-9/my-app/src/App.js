/* const lista =[1,2,3,4,5,6]

const menu =[
    {
        name:'home',
        link:'/',
        id:'home'
    },
    {
        name:'sobre',
        link:'/sobre',
        id:'sobre'
    },
    {
        name:'home-mobile',
        link:'/home-mobile',
        id:'home-mobile'
    }
] */

/* function App(){
    return (
        <>
    <ul>
        {menu.map((item, index)=>(
            <li key={item.id}>
                <a href={item.link}>{item.name} </a>
            </li>
        ))}
    </ul>
        </>
    )
}
 */



function App(){
    function handleClick(){
        alert('clicado')
    }
    return (
        <>
        <button onClick={handleClick}>
            Clique aqui
        </button>
        </>
    )
}

export default App