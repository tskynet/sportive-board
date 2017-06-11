import React from 'react';

//CSS
import '../style/trainning.css';

class Trainning extends React.Component{

	render(){
		return(
			<div className="trainning">
				<div className="trainning-box">
					<h4>Train</h4>
					<ul>
						<li>Type : {this.props.train[0]}</li>
						<li>Start date : {this.props.train[1]}</li>
						<li>End date : {this.props.train[2]}</li>
					</ul>
				</div>
			</div>

		)
	}
}
export default Trainning;