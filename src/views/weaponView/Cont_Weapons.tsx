import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Helper_ClassDef from "../../viewModels/helpers/Helper_ClassDef"

import VM_Weapon from "../../viewModels/weaponView/VM_Weapon"
import VM_WeaponEnhancement from "../../viewModels/weaponView/VM_WeaponEnhancement"

import View_WeaponScore from "./View_WeaponScore"
import View_WeaponScoreLabel from "./View_WeaponScoreLabel"
import weaponJSON from "../../core/itemDefinitions/weapons.json"

export default class Cont_Weapons extends React.Component{
  constructor(props: any)
  {
    super(props);
    this.state =
      {
        //
        //props:
        //charClass
        //charLevel
        //charRace
        //charSize
        //
        weaponsJson: weaponJSON,
        weaponArray: [new VM_Weapon(), new VM_Weapon(), new VM_Weapon(), new VM_Weapon(), new VM_Weapon()],
        helper_ClassDef: new Helper_ClassDef(this.props.charClass),
      };
    }

    componentDidMount(){
      //var weapons = weaponJSON;
      /*
      var testWeapon = new VM_Weapon();
      var joined = this.state.weaponArray.concat(testWeapon);
      console.log(joined.length);
      console.log(testWeapon.name);
      await this.setState({weaponArray: joined});
      console.log("NEW STATE ARRAY LENGTH: ", this.state.weaponArray.length);
      */
      console.log(this.state.weaponsJson);
    }
    ////CONTROLLER FUNCTIONS
    //ADD WEAPON
      //INITIALIZE WEAPON OBJECT USING ATTACK PROPS
    //EDIT WEAPON
    //DELETE WEAPON

    render() {
      return (
        <div>
          <View_WeaponScoreLabel />
          <View_WeaponScore weaponList={this.state.weaponsJson}/>
          <View_WeaponScore weaponList={this.state.weaponsJson}/>
          <View_WeaponScore weaponList={this.state.weaponsJson}/>
          <View_WeaponScore weaponList={this.state.weaponsJson}/>
          <View_WeaponScore weaponList={this.state.weaponsJson}/>
        </div>
      )
    }
  }
