import React from 'react';

class App extends React.Component{

  showListing  = (event) => {
    event.preventDefault();
    const pseudo = (this.props.params.pseudo);
    this.context.router.transitionTo(`/pseudo/${pseudo}/listing`);
  };

  render(){
    return(
      <div>
        <h1> Lorem Ipsum </h1>
        <form className="form" onSubmit={e => this.showListing(e)}>
          <button type="submit">show listing !</button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router : React.PropTypes.object
  }
}
export default App;
