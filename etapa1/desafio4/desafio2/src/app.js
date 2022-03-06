import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styledComponents from 'styled-components'

import { ArticleJava, ArticleJavascip, ArticlePHP, ArticlePython, ArticleTypescript , ArticleInitial} from './Articles'
import { Content } from "./Content"
import { Footer } from "./Footer"
import Header from "./Header"
import { H1 } from './Headings'
import {Menu} from "./Menu"
import { Sidebar } from './Sidebar'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: var(--color-main);
    font-family: var(--default-font);
    min-width: 100vh;
    width: 100%;
    height: 100%;
    background-size: cover;
    font-size: 16px;
  }

  @charset "UTF-8";

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


@font-face {
    font-family: 'title-font';
    src: url('../assets/fonts/Bebas-Regular.otf') format('opentype'), url('../assets/fonts/CaviarDreams.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

:root{
    --default-font:Arial, Helvetica, sans-serif;
    --highlith-font : 'Roboto', sans-serif;
    --color-main: #282c34;
    --third-color:#363c49;
    --white-coolor-text:rgb(221, 209, 209);
    --second-color:#ebe5c5;
    --menu-color: rgb(30, 30, 37);
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
}
`


const articles = [
    {
      title:'javascript',
      content:<ArticleJavascip/>,
      id:'javascript',
      link:'/javascript'
    },
    
    {
      title:'Java',
      content:<ArticleJava/>,
      id:'java',
      link:'/java'
    },
    {
      title:'PHP',
      content:<ArticlePHP/>,
      id:'php',
      link:'/php'
    },
    {
      title:'Phyton',
      content:<ArticlePython/>,
      id:'phyton',
      link:'/phyton'
    },
    {
      title:'Typescript',
      content:<ArticleTypescript/>,
      id:'typescript',
      link:'/typescript'
    },
  ]
  
  
  function App (){
    const [title, setTitle]= useState(null)
	const [content, setContent]= useState(null)


 
    return (
    <>
    <GlobalStyle/>
    <Header/>
    <Sidebar articles={articles} setTitle={setTitle} setContent={setContent}/>
    <Menu/>
    <Content>
        <>
        
            {(title&&content)===null && <><ArticleInitial/></>}
            {(title&&content)!==null && 
            <>
            <H1>{title}</H1>
                {content}
            </>}
            
  
        </>
    </Content>
    <Footer/>
    </>   
    )
}

export  {App}