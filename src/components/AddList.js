import React from 'react';

class AddList extends React.Component{
  addList= (event) =>{
    event.preventDefault();
    const seance = this.addSeance.value;
    console.log(seance);
  };
  render(){
    return(
      <div>
        <form className="form" onSubmit={e => this.addList(e)}>
          <input type="text" placeholder="Add a seance here !" ref={input => this.addSeance =input}/>
          <button type="submit">Add !</button>
        </form>
      </div>
    )
  }
}
export default AddList;
