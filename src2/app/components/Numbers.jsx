import React, {Component} from 'react';

class Numbers extends Component {

	render() {

		let numbers = [];

		return(
		<div id="numbers-frame">
			<div className="well">
			 	{numbers}
			</div>
		</div>
		);
		
	}
}

export default Numbers;