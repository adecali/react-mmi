/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
   handleClick() { console.log('Hello')}
   render() {
  // Dans tous les cas, afficher
      return (
    <div 
    className={this.props.isActive ? "machine active" : "machine"}>
    <h3> {this.props.name} </h3>
     <button onClick={(e) => this.handleClick(e)} type="button" className="btn">
     BOUTOOOOONNN
    </button>
      
    </div>
    )
  }
}
// Le composant sera accessible avec le nom "Machine"
export default Machine;