import React, {Component} from 'react';
import {connect} from 'react-redux';


class Stars extends Component {

	render(){

		let stars = [];

		for(let i=1; i <= this.props.playNine.stars; i++){
			stars.push(
				<span key={i} className="glyphicon glyphicon-star">
				</span>
			);
		}

		return(
		<div id="stars-frame">
			<div className="well">
				{stars}
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

export default connect(mapStateToProps)(Stars);