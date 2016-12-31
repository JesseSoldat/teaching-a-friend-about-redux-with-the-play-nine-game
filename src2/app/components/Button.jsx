import React, {Component} from 'react';

class Button extends Component {

	render(){

		return(
		<div id="button-frame">
			
			<br/><br/>
			<button className="btn btn-warning btn-xs"> 
				<span className="glyphicon glyphicon-refresh">
				&nbsp; 
				</span>
			</button>
		</div>
		);

	}
}
export default Button;