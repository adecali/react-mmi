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
     
      render() {
    
        return (
          <div className="principale">
         <Header/>
         <div id="app" class="app-container">

        </div>
                  

                    <div className="machines-list">{
              Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         isActive={this.state.machines[key].isActive}
                        
                        />
              )}
              
                     </div>
                     
        <Footer/>
      </div>
    );
  }
  
}

export default App;