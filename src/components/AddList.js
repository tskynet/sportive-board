import React from 'react';
import base from '../base';

import '../style/addList.css';


class AddList extends React.Component{

  state = {
    seances: {}
  }
  componentWillMount(){
    this.ref = base.syncState('/', {
      context: this,
      state: 'seances'
    });
  }
  addList= (event) =>{
  event.preventDefault();
  const seance = this.addSeance.value;
  console.log(seance);

  const seances = {...this.state.messages};

  const timeStamp = Date.now();

  seances[`seance-${timeStamp}`]= seance;

  this.setState({seances : seances});

  };
  render(){
    return(
      <div className="addList">
        <form className="form text-center" onSubmit={e => this.addList(e)}>
          <input type="text" className="form-control" placeholder="Add a seance here !" ref={input => this.addSeance =input}/>
          <button type="submit" className="btn btn-info">Add !</button>
        </form>
      </div>
    )
  }
}
export default AddList;
