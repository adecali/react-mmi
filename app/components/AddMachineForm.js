/**
 *
 * App.js
 *
 */
import React from 'react';
class AddMachineForm extends React.Component {
createMachine(event){
event.preventDefault();
const machine={
name: this.name.value,
status: this.status.value}

this.props.addMachine(machine);
this.machineForm.reset();}

render(){
      return (
        <form ref={(input) => this.machineForm = input} className="machine-edit" onSubmit>
        <input ref={(input) => this.name = input} type="text" placeholder= "Veggie Name">
        <select ref={(input) => this.status = input>
<option value="active"> Actif!</option>       
<option value="inactive"> Inactif!</option>
</select>
<button type="submit"> Ajouter une nechima>/aoption
        </form>
        )
       }
export default AddMachineForm;
