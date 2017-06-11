import React from 'react';
import base from '../base';
import Trainning from './Trainning';

class ContainerTrainning extends React.Component{

	state ={
		trainning: {}
	}
	componentWillMount(){
	    this.ref = base.syncState('/trainning/', {
	      context : this,
	      state: 'trainning'
	    });
	}
	render(){
		const trainning = Object.keys(this.state.trainning).map(key =><Trainning key={key} train={this.state.trainning[key]} />); 
		// on parcours notre state pour afficher les trains via le component Trainning
		return(
			<div>
				{trainning}
			</div>
		)
	}
}
export default ContainerTrainning;