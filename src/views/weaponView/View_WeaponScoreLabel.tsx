import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class View_WeaponScoreLabel extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {

    };

  }

  render(){
    return (
      <div>
        <input type="text" className="" name=""  style={{width: "150px"}} value={"Weapon Name"}/>
        <input type="text" className="NameInputs" name="" style={{width: "150px"}} value={"Damage"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "40px", fontSize: "12px"}} value={"1st Atk"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "40px", fontSize: "12px"}} value={"2nd Atk"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "40px", fontSize: "12px"}} value={"3rd Atk"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "40px", fontSize: "12px"}} value={"4th Atk"}/>
        <input type="text" className="NameInputs" name="" style={{width: "60px", fontSize: "12px"}} value={"Atk Mod"}/>
        <input type="text" className="NameInputs" name="levelUpScore" style={{width: "60px", fontSize: "12px"}} value={"Dmg Mod"}/>
        <input type="text" className="NameInputs" name="" style={{width: "60px", fontSize: "12px"}} value={"Type"}/>
        <input type="text" className="NameInputs" name="" style={{width: "60px", fontSize: "12px"}} value={"Crit Range"}/>
        <input type="text" className="NameInputs" name="spellScore" style={{width: "60px", fontSize: "12px"}} value={"Mult"}/>
        <input type="text" className="NameInputs" name="miscScore" style={{width: "60px", fontSize: "12px"}} value={"Equiped"}/>
        <input type="text" className="NameInputs" name="miscScore" style={{width: "60px", fontSize: "12px"}} value={"Range"}/>
      </div>
    )
  }
}
