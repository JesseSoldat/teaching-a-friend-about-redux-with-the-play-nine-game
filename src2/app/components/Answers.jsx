import React, {Component} from 'react';

class Answers extends Component {

	render(){

		let selectedNumbers = [];

		return(
		<div id="answer-frame">
			<div className="well">
				{selectedNumbers}
			</div>
		</div>
		);

	}
}

export default Answers;