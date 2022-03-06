import styledComponents from "styled-components"

function Footer (){
    return (
        <>
        <FooterSTyle>
            <Pfooter> © Copyright 2022. Desafio do Bootcamp</Pfooter>
        </FooterSTyle>
        </>
    )
}

const FooterSTyle =  styledComponents.footer`
color: var(--white-coolor-text);
text-align: center;
font-size: 0.8em;
padding: 5px;
`
const Pfooter = styledComponents.p`
text-align: center;
`
export {Footer}