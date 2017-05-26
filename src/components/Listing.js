import React from 'react';

import '../style/listing.css';
class Listing extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li>{this.props.seance}</li>

        </ul>

      </div>

    )
  }

}
export default Listing;
