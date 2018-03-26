/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="Machine">
          <div className="MachineHeader">
            <h3>Machine pour le {this.props.tittle}</h3>
          </div>
          
            <p className="Machine1">
             {this.props.tittle} | {this.props.isActive}
            </p>
            
                <div className="MachineFooter">
                <h4>{this.props.tittle}</h4>
              </div>
      </div>
      );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
