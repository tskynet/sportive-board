import React from 'react';

//import du css pour la connexion
import '../style/connexion.css';

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
        <h3>Connexion to Sportive Board !</h3>
        <form className="connexion">
          <input type="text" className="form-control" placeholder="pseudo" ref={input => this.pseudoInput = input}/>
          <button type="submit" className="btn btn-primary">Start ! </button>
        </form>
      </div>
    )
  }
  static contextTypes = {
    router: React.PropTypes.object
  }
}
export default Connexion;
