import React from 'react';

class Connexion extends React.Component{

  //startApp -> function use on submit our form, for take pseudo and start App component
  startApp = (event) =>{
    event.preventDefault();
    const pseudo = (this.pseudoInput.value);
    this.context.router.transitionTo(`/pseudo/${pseudo}`);
  };

  render(){
    return(
      <div className="connexionBox" onSubmit={e => this.startApp(e)}>
        <form className="connexion">
          <input type="text" placeholder="pseudo" ref={input => this.pseudoInput = input}/>
          <button type="submit">Start ! </button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router: React.PropTypes.object
  }
}
export default Connexion;
