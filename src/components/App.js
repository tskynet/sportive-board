import React from 'react';

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
  }

  render(){
    return(
      <div>
        <h1> Lorem Ipsum </h1>
        <form className="form" onSubmit={e => this.showListing(e)}> // onSubmit will launch ContainerList component
          <button type="submit">show listing !</button>
        </form>
        <form className="form" onSubmit={e => this.addListing(e)}> // onSubmit will launch ContainerAddList component
          <button type="submit">add on list !</button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router : React.PropTypes.object
  }
}
export default App;
