function App(){
/*     return <Title><i>ALEX FARIAS</i> texto normal
    {3}
    {true}
    {false}
    {null}
    {undefined}
    {['um', 'dois', 'tres',<h1>titulo h1</h1>]}
    </Title> */
   return (<>
    <Title>Titulo</Title>
    <Sidebar/>
    <Content/>
    </>)
}


function Title({children}){
    console.log(children)
    return (<>
    <h3 className="title"><span>{children}</span></h3>

    <label htmlFor="name">ALex</label>
    </>
    )
}

function Title2({children}){
    return( 
    <h2> {children}</h2>
    )
}

function Sidebar(){
 return <aside>
     <Title2>Titulo 2</Title2>
 </aside>
}

function Content (){
    return <section>
        <p> conteudo</p>
        <h2>paragrafo</h2>
    </section>
}

export default App