import styledComponents from "styled-components"

function H1({children}){
    return (
        <H1Stile>{children}</H1Stile>
    )  
}
function H2({children}){
    return (
        <h2>{children}</h2>
    )  
}
function H3({children}){
    return (
        <h3>{children}</h3>
    )  
}
function H4({children}){
    return (
        <h4>{children}</h4>
    )  
}
function H5({children}){
    return (
        <h6>{children}</h6>
    )  
}
function H6({children}){
    return (
        <h6>{children}</h6>
    )  
}
function P({children}){
    return (
        <Pstyle>{children}</Pstyle>
    )  
}

const Pstyle= styledComponents.p`
margin: 15px 0;
text-align: justify;
display: flex;
text-indent: 30px;
line-height:2em;
font-size: 1em;
`

const H1Stile = styledComponents.h1`
font-family: var(--default-font);
text-align: center;

`

export {H1, H2, H3, H4, H5, H6, P};