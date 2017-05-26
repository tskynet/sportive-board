import React from 'react';
import AddList from './AddList';

class ContainerAddList extends React.Component{
/*  state = {
  	seances: {}
  }
  addSeance = (seance) => {

  	const seances = {...this.state.messages};

  	const timeStamp = Date.now();

  	seances[`seance-${timeStamp}`]= seance;

 	this.setState({seances : seances});
  }*/
  render(){
    return(
      <div>
        <AddList 

        />
      </div>
    )
  }
}
export default ContainerAddList;
