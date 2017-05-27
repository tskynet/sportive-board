import React from 'react';
import Listing from './Listing';
import base from '../base';
class ContainerList extends React.Component{
  state = {
    seances: {}
  }

  componentWillMount(){
    this.ref = base.syncState('/', {
      context : this,
      state: 'seances'
    });
  }

  render(){
  	const seances = Object
  	.keys(this.state.seances)
  	.map(key => <Listing key={key} seance={this.state.seances[key]} />);

    return(
      <div>
      	<h3 className="text-center">List of your seances !</h3>
        {seances}
      </div>
    )
  }

}
export default ContainerList;
