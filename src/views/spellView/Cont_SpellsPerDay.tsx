import * as React from 'react';
import * as ReactDOM from 'react-dom';

import druid from "../../core/classDefinitions/druid.json"

import View_SpellsPerDayLabel from "./View_SpellsPerDayLabel"
import View_SpellsPerDay from "./View_SpellsPerDay"


export default class Cont_SpellsPerDay extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {
      //PROPS: vm_AbilityScores, helper_ClassDef, helper_RaceDef(FIX THIS)
      //PROPS: Class, Race
      classDefJson: druid
    };

  }

  componentDidMount(){
    //console.log(this.state.classDefJson.levelTable[this.props.charLevel - 1]);
  }


  render() {
    return (
      <div>
        ""
        <View_SpellsPerDayLabel />
        <View_SpellsPerDay spellsPerDay={this.state.classDefJson.levelTable[this.props.charLevel - 1].level.spellsPerDay} viewLabel={"Daily Spells"}/>
        <View_SpellsPerDay spellsPerDay={this.state.classDefJson.levelTable[this.props.charLevel - 1].level.spellsPerDay} viewLabel={"Rem Spells"}/>
      </div>
    )
  }
}
