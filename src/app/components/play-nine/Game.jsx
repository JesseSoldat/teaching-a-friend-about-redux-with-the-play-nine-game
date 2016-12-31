import React, {Component} from 'react';
import {connect} from 'react-redux';
//Components
import Stars from './Stars';
import Button from './Button';
import Answers from './Answers';
import Numbers from './Numbers';
import Done from './Done';

class Game extends Component {
	render(){
		let bottomFrame;
		let doneStatus = this.props.playNine.doneStatus;

		if(doneStatus){
			bottomFrame = <Done />
		} else {
			bottomFrame = <Numbers />
		}

		return(
		<div className="container">
			<h2>Play Nine</h2>
			<div className="clearfix">
				<Stars />
				<Button />
				<Answers />
			</div>
			{bottomFrame}
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playNine: state.playNine
	}
}

export default connect(mapStateToProps)(Game);