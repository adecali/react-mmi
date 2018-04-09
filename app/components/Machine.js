/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle'

class Machine extends React.Component {
   onToggleClick() { console.log('Hello')
     this.props.handleStatusChange(this.props.index);

   }
   render() {
  // Dans tous les cas, afficher
      return (
          
            <div 
            className={this.props.isActive ? "machine active" : "machine"}>
                <h5> {this.props.name} </h5>
                     <button onClick={(e) => this.onToggleClick(e)} type="button" className="bouton">  
                     {this.props.isActive ? "Pro" : "Noob"}
                    </button>
                    <Toggle onClick={(e)=> this.state.aubergineIsReady(e)}  className='custom-classname'/>
                      <span>Custom className</span>


            </div>
    )
  }
}
// Le composant sera accessible avec le nom "Machine"
export default Machine;
