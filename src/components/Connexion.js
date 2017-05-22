import React from 'react';

class Connexion extends React.Component{

  render(){
    return(
      <div className="connexionBox">
        <form className="connexion">
          <input type="text" placeholder="pseudo" />
          <button type="submit">Start ! </button>
        </form>
      </div>
    )
  }

}
export default Connexion;
