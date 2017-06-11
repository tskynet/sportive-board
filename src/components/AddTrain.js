import React from 'react';
import base from '../base';
import '../style/addtrain.css';
class AddTrain extends React.Component{
	state={
		trainning: {}
	}
	componentWillMount(){
		this.ref = base.syncState('/trainning/', {
	      context: this,
	      state: 'trainning'
		});
	}
	addTrain = event => {
		event.preventDefault();
		const startDate=  this.startDate.value;
		const endDate = this.endDate.value;
		const typeTrain = this.typeTrain.value;
		const tableauTrain = [typeTrain, startDate, endDate];

		const trainning={...this.state.trainning};
		const timeStamp = Date.now();
		trainning[`train-${timeStamp}`]= tableauTrain;// timeStamp est notre clé, tableau contient le type de l'entrainement et les dates 

		this.setState({trainning : trainning});

	};

	render(){
		return(
			<div className="addTrain">
				<div className="addTrain-box">
					<h2>Add a new train !</h2>
					<form onSubmit={e => this.addTrain(e)} >
						<select className="form-control" ref={input => this.typeTrain = input} >
							<option>Cardio</option>
							<option>Renforcement musculaire</option>
							<option>Endurence</option>
							<option>Explosivité</option>
						</select>
						<div>
						<span>Start at :</span>
						<input type="date" className="form-control" placeholder="start" ref={input => this.startDate = input} />
						</div>
						<div>
						<span>End at :</span>
						<input type="date" className="form-control" ref={input => this.endDate = input} />
						</div>
						<button className="btn btn-info">Add train ! </button>
					</form>
				</div>
			</div>
		)
	}
}
export default AddTrain;