import {Sidebar} from './Sidebar'
function Menu() {
  return(<>
    <Sidebar/>
    <nav>
      <a href="/">Home</a>
      <a href="/">Perguntas</a>
      <a href="/">Repostas</a>
      <a href="/">Sobre</a>
    </nav>
  </>
  )
}

export  {Menu}