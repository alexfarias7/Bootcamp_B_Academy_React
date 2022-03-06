import styledComponents from "styled-components"

import { createGlobalStyle } from "styled-components"


const GLobalStyles = createGlobalStyle`

#nav-menu:focus-within .button-menu {
	pointer-events: none;
  }
  #nav-menu:focus-within .icon-bar:nth-of-type(1) {
	transform: translate3d(0,8px,0) rotate(45deg);
  }
  #nav-menu:focus-within .icon-bar:nth-of-type(2) {
	opacity: 0;
  }
  #nav-menu:focus-within .icon-bar:nth-of-type(3) {
	transform: translate3d(0,-8px,0) rotate(-45deg);
  }
  
  #nav-menu:focus-within #content-menu {
	transform: none;
  }
  

`

const AStyle= styledComponents.a`
text-decoration: none;
color: #fff;
&:hover{
	text-decoration: underline;
    color: var(--color-main);
    background-color:var(--white-coolor-text);
   }
`
const  UlStyle= styledComponents.ul`
list-style: none;
line-height: 2;
`

const LiStyle = styledComponents.li`
list-style: none;
line-height: 2;
`

const DivMenu= styledComponents.div`
position: absolute;
display: inline-block;
height: 100%;
width: 100%;
pointer-events: none;
visibility: visible;


`
const DivBg= styledComponents.div`
position: absolute;
top: 70px;
left: 0;
width: 100%;
height: calc(100% - 70px);
visibility: hidden;
opacity: 0;
transition: .3s;
&:focus-within {
	visibility: visible;
	opacity: 6;
   }
`
const ButtonMenu = styledComponents.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
border: 0;
background: transparent;
border-radius: 0;
height: 70px;
width: 30px;
cursor: pointer;
margin-left: 26px;
touch-action: manipulation;
pointer-events: auto;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-appearance: none;
z-index: 99;


`

const SpanSTyle = styledComponents.span`
display: block;
width: 100%;
height: 3px;
background: #f5f5f5;
transition: .3s;
margin-top: 5px;

`

const ContentMenu = styledComponents.div`

margin-top: 70px;
padding: 10px;
width: 15%;
background-color: var(--third-color);
font-family: var(--default-font);
color: var(--white-coolor-text);
max-width: 300px;
position: absolute;
border-radius: 5px;
font-weight: bold;
top: 0;
left: 0;
height: calc(100% - 300px);
pointer-events: auto;
-webkit-tap-highlight-color: rgba(0,0,0,0);
transform: translateX(-100%);
transition: transform .3s;
will-change: transform;
contain: paint;
opacity: 0.8;
`

function Sidebar ({articles, setTitle, setContent}){


    return (
        <>
		<GLobalStyles/>
          <div id="container">
        <DivMenu id="nav-menu">
            <DivBg className="bg"></DivBg>
				<ButtonMenu className="button-menu" tabIndex="0">
				  <SpanSTyle className="icon-bar"></SpanSTyle>
				  <SpanSTyle className="icon-bar"></SpanSTyle>
				  <SpanSTyle className="icon-bar"></SpanSTyle>
				</ButtonMenu>
			<ContentMenu id="content-menu" tabIndex="0">
			<UlStyle>
			{articles.map((article)=>(
				<LiStyle key={article.id}>
					<AStyle href='/' onClick={(e)=>{
						e.preventDefault()
						setTitle(article.title)
						setContent(article.content)
					}}>
						{article.title}
					</AStyle>
				</LiStyle>
			))}
			</UlStyle>
			</ContentMenu>
		</DivMenu>
	</div>
        </>
    )
}

export {Sidebar}