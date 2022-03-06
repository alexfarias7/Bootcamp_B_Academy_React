import {H1} from './Headings'

import styledComponents from 'styled-components';
import { createGlobalStyle } from 'styled-components';




function Header(){
    return (
        <>
        <GlobalStyleHeader/>
        <HeaderStyle>
        <H1 children="Meu App"/>
        <Pheader>Desafio propposto pelo bootcamp</Pheader>
        </HeaderStyle>
        </>
    )
}
const Pheader = styledComponents.p`
text-align: center;
`
const HeaderStyle = styledComponents.header`
background-image: linear-gradient(to bottom, var(--color-main), var(--third-color));
background-color: var(--default-font);
text-align: center;
padding: 20px 0px;
`
const GlobalStyleHeader = createGlobalStyle`
header > h1 {
    color: var(--second-color);
    font-size: 1.5em;
    font-family: 'title-font';
    margin-bottom: 20px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
    
}
header > p {
    font-family: var(--highlith-font);
    font-size: 1.2em;
    color: var(--white-coolor-text);
    max-width: 600px;
    padding-left: 10px;
    margin: auto;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
    text-align: center;

}
`


export default Header;