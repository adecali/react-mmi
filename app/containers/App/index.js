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
             this.state = {
                   machines:[
                          { id :1,
                              name : "Machine à Café",
                             isActive:true},
                             
                            { id: 2, name:"Machine à chocolat", 
                            isActive:false },
                                          
                           {id: 3, name:"Machine à thé",
                            isActive:true }
                  ]
             };
     }
     
      render() {
    // Dans tous les cas, afficher
    //    <Machine tittle={this.state.machines[0].name} isActive={this.state.machines[0].isActive} />
         //   <Machine tittle={this.state.machines[1].name} isActive={this.state.machines[1].isActive} /> 
//<Machine tittle={this.state.machines[2].name} isActive={this.state.machines[2].isActive} />
        return (
          <div>
          <Header/>
          {this.state.machines.map(machine =>// console.log(machine.name))}
          <Machine name={machine.name}
          key={machine.id}
          isActive={machine.isActive}/>
              
          )}
      
          <Footer/>
          </div>
          );
      }
     
   }

export default App;