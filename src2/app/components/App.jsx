import React, {Component} from 'react';
import {Link} from 'react-router';


class App extends Component {
	constructor(props){
		super(props)
	}

	renderUserMenu(currentUser){
		if(true){
			return(
			<li className="dropdown">
				<a href="#" className="dropdown-toggle"
					data-toggle="dropdown" role="button"
					aria-haspopup="true" aria-expanded="false">
					<span className="caret">
					</span>
				</a>
				<ul className="dropdown-menu">
					<li>
						<Link to="play-nine">Play Nine</Link>
					</li>
				</ul>
			</li>
			);
		} else {
			return []
		}
	}

	render(){
		return(
		<div>
			<header className="navbar navbar-static-top navbar-inverse" role="banner">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle collapsed" type="button" data-toggle="collapsed"
							data-target=".bs-navbar-colapse">
							<span className="sr-only">
								Toggle navigation
							</span>
							<span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <Link to="/" className="navbar-brand">
	          	JLab
	          </Link>
	        </div>
	        <nav className="collapsed navbar-collapsed bs-navbar-colapse"
	        	role="navigation">
	        	<ul className="nav navbar-nav">
	        		<li><Link to="/">Home</Link></li>
	        	</ul>
	        	<ul className="nav navbar-nav navbar-right">
	        		{this.renderUserMenu()}
	        	</ul>
	        </nav>
     		</div>
   		</header>

   		<div className="container">
   			{this.props.children}
   		</div>
   	


   	</div>
   	)
   }

}
export default App;