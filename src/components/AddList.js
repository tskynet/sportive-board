import React from 'react';
import base from '../base';

//CSS
import '../style/addList.css';

//import du datepicker
import '../style/datepicker/css/classic.css';
import '../style/datepicker/css/classic.date.css';


class AddList extends React.Component{

  state = {
    seances: {}
  }
  componentWillMount(){
    this.ref = base.syncState('/seance/', {
      context: this,
      state: 'seances'
    });
  }
  addList= (event) =>{
  event.preventDefault();
  // on recupere la valeur des inputs et on les pushs dans le tableau "tableau"
  const seance = this.addSeance.value;
  const date = this.addDate.value;
  var time= this.setTime.value;
  const tableau = [seance, date, time];
  
  const seances = {...this.state.seances};
  //on set une clé unique pour notre valeur à stocker en BDD puis on l'affecte
  const timeStamp = Date.now();
  seances[`seance-${timeStamp}`]= tableau; // timeStamp est notre clé, tableau contient le nom de la seance, la date , la durée

  this.setState({seances : seances}); // on met à jour notre state, qui va stocker en BDD par la suite

  };
  render(){
    return(
      <div className="addList">
        <form className="form text-center" onSubmit={e => this.addList(e)}>
          <select className="form-control" ref={input => this.addSeance = input} >
            <option>Running</option>
            <option>Climbing</option>
            <option>Swimming</option>
            <option>Body building</option>
            <option>Tennis</option>
            <option>Basketball</option>
            <option>Handball</option>
            <option>Judo</option>
          </select>
          <input type="date" className="form-control" ref={input => this.addDate = input} />
          <input type="text" className="form-control" placeholder="Time of your seance in minutes" ref={input => this.setTime  = input} />
          <button type="submit" className="btn btn-info">Add ! </button>
        </form>

      </div>
    )
  }
}
export default AddList;
