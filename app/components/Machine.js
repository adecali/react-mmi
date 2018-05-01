/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle'


class Machine extends React.Component {
   onToggleClick() { console.log('BOUH')
     this.props.handleStatusChange(this.props.index);
    
  };
   
 
   render() {
  // Dans tous les cas, afficher
      return (
          
            <div 
            className={this.props.isActive ? "machine active" : "machine"}>
                <h5> {this.props.name} </h5>
                     <button onClick={(e) => this.onToggleClick(e)} type="button" className="bouton">  
                     {this.props.isActive ? "Pro" : "Noob"}
                    </button>
                        <label>
                              <Toggle
                               checked={this.props.isActive}   onClick={(e) => this.onToggleClick(e)} />
                        </label>
            </div>
            
    )
    
  }
}
// Le composant sera accessible avec le nom "Machine"
export default Machine;
