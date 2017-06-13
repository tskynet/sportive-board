import React from 'react';
//import base from '../base';
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

  addTrainning = (event) => {
    event.preventDefault();
    const pseudo  = (this.props.params.pseudo);
    this.context.router.transitionTo(`/pseudo/${pseudo}/addtrainning`);
  };

  showTrainning = (event) => {
    event.preventDefault();
    const pseudo = (this.props.params.pseudo);
    this.context.router.transitionTo(`/pseudo/${pseudo}/showtrainning`);
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
        <form className="form" onSubmit={e => this.addTrainning(e)}>
          <button type="submit" className="btn btn-info">add a new trainning !</button>
        </form>
        <form className="form" onSubmit={e => this.showTrainning(e)}>
          <button type="submit" className="btn btn-info">Show your trainning ! </button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router : React.PropTypes.object
  }
}
export default App;
