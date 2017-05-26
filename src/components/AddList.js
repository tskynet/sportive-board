import React from 'react';

import '../style/addList.css';
class AddList extends React.Component{
  addList= (event) =>{
    event.preventDefault();
    const seance = this.addSeance.value;
    console.log(seance);
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
