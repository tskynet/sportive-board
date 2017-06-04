import React from 'react';

import '../style/listing.css';
class Listing extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li><b>{this.props.seance[1]}</b> {this.props.seance[0]} <i>Duration : {this.props.seance[2]} min !</i></li>
 

        </ul>

      </div>

    )
  }

}
export default Listing;
