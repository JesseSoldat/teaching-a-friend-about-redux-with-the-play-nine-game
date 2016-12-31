import React, {Component} from 'react';
import Stars from './Stars';
import Button from './Button';
import Answers from './Answers';
import Numbers from './Numbers';


class Game extends Component {

	render(){
		return(
		 <div className="container">
		 	<h2>Play Nine</h2>
		 	<div className="clearfix">
		 		<Stars />
		 		<Button />
		 		<Answers />
		 	</div>
		 	<Numbers />
		 </div>
		);
	}
}
export default Game;