import styledComponents from "styled-components"
function Content ({children}){
    return(
        <>
        <MainContent>
        <ArticleContents>
        {children}
         </ArticleContents>
        </MainContent>
        </>
    )
}

const ArticleContents = styledComponents.article`
min-height: 100%;
display: flex;
flex-direction: column;
align-items: stretch;
`

const MainContent = styledComponents.main`
background-color: white;
border-radius: 10px;
box-shadow: 5px 5px 15px rgba(53, 61, 64, 0.726);
width: 80vw;
padding: 10px;
margin: auto;
flex-grow: 1;

`
export {Content} 