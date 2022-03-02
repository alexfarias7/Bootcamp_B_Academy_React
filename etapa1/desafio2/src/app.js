import { useState } from 'react'

import { ArticleJava, ArticleJavascip, ArticlePHP, ArticlePython, ArticleTypescript , ArticleInitial} from './Articles'
import { Content } from "./Content"
import { Footer } from "./Footer"
import Header from "./Header"
import { H1 } from './Headings'
import {Menu} from "./Menu"
import { Sidebar } from './Sidebar'



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