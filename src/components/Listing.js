import React from 'react';

import '../style/listing.css';
class Listing extends React.Component{

  render(){
    return(
      <div className="listing">
        <ul>
          <li><b>{this.props.seance[1]}</b> {this.props.seance[0]} <i>Duration : <b>{this.props.seance[2]}</b> min !</i></li>
 

        </ul>

      </div>

    )
  }

}
export default Listing;
