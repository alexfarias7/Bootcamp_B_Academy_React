import styledComponents from "styled-components"
import { createGlobalStyle } from "styled-components"

const NavStyle = styledComponents.nav`
background-color: var(--menu-color);
padding: 10px;
box-shadow: 0px 7px 7px rgb(0, 0, 0, 0.5);
display: inline-flex;
width: 100vw;
justify-content: space-around;
margin-bottom: 5vh
`

const GlobalStyleNav = createGlobalStyle`
nav > a {
  color: var(--white-coolor-text);
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition-duration: 0.5s;
}
nav > a:hover{
  background-color:var(--second-color);
  color:var(--color-main);
}

`
function Menu() {
  return(<>
  <GlobalStyleNav/>
    <NavStyle>
      <a href="/">Home</a>
    </NavStyle>
  </>
  )
}

export  {Menu}