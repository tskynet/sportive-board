import React from 'react';
import base from '../base';
import '../style/app.css';
class App extends React.Component{





  showListing  = (event) => {
    event.preventDefault();
    const pseudo = (this.props.params.pseudo);
    this.context.router.transitionTo(`/pseudo/${pseudo}/listing`);
  };

  addListing = (event) =>{
    event.preventDefault();
    const pseudo = (this.props.params.pseudo);
    this.context.router.transitionTo(`/pseudo/${pseudo}/addlist`);
  };

  render(){
    return(
      <div className="app">
        <h1 className="text-center">Welcome {this.props.params.pseudo} !</h1>
        <form className="form" onSubmit={e => this.showListing(e)}> 
          <button type="submit" className="btn btn-info">show listing !</button>
        </form>
        <form className="form" onSubmit={e => this.addListing(e)}> 
          <button type="submit" className="btn btn-info">add on list !</button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router : React.PropTypes.object
  }
}
export default App;
