function Sidebar (){
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
				<li><a href="/">Página inicial</a></li>
				<li><a href="/">Quem somos?</a></li>
				<li><a href="/">Nossa empresa</a></li>
				<li><a href="/">Nosso portifólio</a></li>
				<li><a href="/">Trabalhe conosco</a></li>
				<li><a href="/">Faça um orçamento</a></li>
				<li><a href="/">Fale conocos</a></li>
				<li><a href="/">Ferramentas</a></li>
				<li><a href="/">Nosso endereço</a></li>
				<li><a href="/">Ajuda</a></li>
			</ul>
			</div>
		</div>
	</div>
        </>
    )
}

export {Sidebar}