import React from 'react';
import Listing from './Listing';
import base from '../base';
class ContainerList extends React.Component{
  state = {
    seances: {}
  }

  componentWillMount(){
    this.ref = base.syncState('/seance/', {
      context : this,
      state: 'seances'
    });
  }

  render(){
  	const seances = Object
  	.keys(this.state.seances)
  	.map(key => <Listing key={key} seance={this.state.seances[key]} />);
    // Parcours de notre state afin d'afficher nos seances via le component Listing
    return(
      <div>
      	<h3 className="text-center">List of your seances !</h3>
        {seances}
      </div> // on appelle plus notre component mais directement la variable qui boucle sur notre state, c'est cette variable qui va appeler le component
    )
  }

}
export default ContainerList;
