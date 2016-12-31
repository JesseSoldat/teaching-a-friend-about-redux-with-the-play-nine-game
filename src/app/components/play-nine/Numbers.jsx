import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SelectNumber} from '../../actions/play_nine_actions';


class Numbers extends Component {
	render(){

		let numbers = [];
		let className;
		let selectedNumbers = this.props.playNine.selectedNumbers;
		let usedNumbers = this.props.playNine.usedNumbers;

		for(let i = 1; i <= 9; i++){

			className = "number selected-" + (selectedNumbers.indexOf(i) >=0);
			className += " used-" + (usedNumbers.indexOf(i) >=0);

			numbers.push(
				<div key={i} className={className}
				onClick={ () => this.props.SelectNumber(i) }>
					{i}
				</div>
			)
		}

		return(
		<div id="numbers-frame">
			<div className="well">
				{numbers}
			</div>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		playNine: state.playNine
	}
}
export default connect(mapStateToProps, {SelectNumber})(Numbers);