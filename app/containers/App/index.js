/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import AddMachine from '../../components/AddMachine.js';
import MaMachine from '../../components/MaMachine.js';

import GoogleMapReact from 'google-map-react';

//import AddMachineForm from '../../components/AddMachineForm.js';


// On peut aussi importer du CSS de la meme facon.
import css from '../../css/styles.css';

//export default function App() {
//  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
 //  <div>
  //     <Header/>

   //   <Machine tittle="thé" isActive="yes" />
   //   <Machine tittle="chocolat"isActive="no" /> 
   //   <Machine tittle="café"isActive="no" />
//      <Footer/>
//   </div> );
   
   class App extends React.Component {
     constructor (props){
             super(props)
             this.handleStatusChange = this.handleStatusChange.bind(this);
             
                 this.state = { machines:[
                          { id :0,
                              name : "Machine à Café", isActive:true},
                             
                            { id: 1, 
                            name:"Machine à chocolat", isActive:false },
                                          
                           {id: 2, 
                           name:"Machine à thé", isActive:true },
                            
                             {id: 3, 
                           name:"Machine à bouh", isActive:false }
                           
                            ]
                      
                             };
                     }
     
       handleStatusChange(key) {
            const machines = { ...this.state.machines };
                 machines[key].isActive = !machines[key].isActive;

            console.log({ machines });
                 this.setState({ machines });
  }
     // Méthode pour ajouter un formulaire
  addMachineToState(machine) {
    console.log("addMachineToState");
    console.log(machine);
  }

  render() {
    // Calcul des compteurs
    const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      // On incrémente le compteur à chaque fois que l'on trouve une machine active
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;

    return (
      <div className="main">
        <Header/>
        
          <AddMachine addMachineToState={this.addMachineToState}/>
          {/*Compteurs*/}
          <div className="counter">
            <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
          </div>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            {
              Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         isActive={this.state.machines[key].isActive}/>
              )}
          </div>
          <MaCarte/>
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>
        <BellaMachina lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <BellaMachina {...this.props.BellaMachinaCoords} text={'B'} /* road circle */ />
      </GoogleMap>
                 
        <Footer/>
      </div>
    );
  }
}

export default App;