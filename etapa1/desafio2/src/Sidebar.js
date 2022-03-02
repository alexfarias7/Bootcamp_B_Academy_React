

function Sidebar ({articles, setTitle, setContent}){


    return (
        <>
		
          <div id="container">
        <div id="nav-menu">
            <div className="bg"></div>
				<div className="button-menu" tabIndex="0">
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				</div>
			<div id="content-menu" tabIndex="0">
			<ul>
			{articles.map((article)=>(
				<li key={article.id}>
					<a href='/' onClick={(e)=>{
						e.preventDefault()
						setTitle(article.title)
						setContent(article.content)
					}}>
						{article.title}
					</a>
				</li>
			))}
			</ul>
			</div>
		</div>
	</div>
        </>
    )
}

export {Sidebar}