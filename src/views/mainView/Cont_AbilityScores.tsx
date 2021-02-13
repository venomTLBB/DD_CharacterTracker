import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View_AbilityScore from './View_AbilityScore'
import View_AbilityLabels from './View_AbilityLabels'

import Cont_SavingThrows from './Cont_SavingThrows'
import Cont_Initiative from './Cont_Initiative'
import Cont_AttackScore from './Cont_AttackScore'
import Cont_SkillTable from '../skillView/Cont_SkillTable'
import Cont_SpellsPerDay from '../spellView/Cont_SpellsPerDay'

import Helper_ClassDef from "../../viewModels/helpers/Helper_ClassDef"
import Helper_ParseSkills from "../../viewModels/helpers/Helper_ParseSkills"

export default class Cont_AbilityScores extends React.Component{
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
      helper_ParseSkills: new Helper_ParseSkills(),
      helper_ClassDef: new Helper_ClassDef(this.props.charClass),
      vm_AbilityScores: this.props.vm_AbilityScores,
      strVM: this.props.vm_AbilityScores.strScore,
      dexVM: this.props.vm_AbilityScores.dexScore,
      conVM: this.props.vm_AbilityScores.conScore,
      intVM: this.props.vm_AbilityScores.intScore,
      wisVM: this.props.vm_AbilityScores.wisScore,
      chaVM: this.props.vm_AbilityScores.chaScore
    };

    this.changeAbilityScore = this.changeAbilityScore.bind(this);
  }

  changeAbilityScore(evt)
  {
    console.log(this.state.helper_ParseSkills.getSkillTable());
    //console.log(this.state.strVM);
    /*
    console.log(evt.target.id);
    console.log(evt.target.name);
    console.log(evt.target.value);
    */
    var copy;
    /*
    copy.setSubScore(evt.target.name, evt.target.value);
    this.setState({ strVM: copy});
    */
    switch (evt.target.id) {
      case "STR":
        copy = this.state.strVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ strVM: copy});
        break;
      case "DEX":
        copy = this.state.dexVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ dexVM: copy});
        break;
      case "CON":
        copy = this.state.conVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ conVM: copy});
        break;
      case "INT":
        copy = this.state.intVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ intVM: copy});
        break;
      case "WIS":
        copy = this.state.wisVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ wisVM: copy});
        break;
      case "CHA":
        copy = this.state.chaVM;
        copy.setSubScore(evt.target.name, evt.target.value);
        this.setState({ chaVM: copy});
        break;
      default:
        break;
    }
  }


  render() {
    return (
        <div>
          <View_AbilityLabels/>
          <View_AbilityScore abilityModel={this.state.strVM} changeAbilityScore={this.changeAbilityScore}/>
          <View_AbilityScore abilityModel={this.state.dexVM} changeAbilityScore={this.changeAbilityScore}/>
          <View_AbilityScore abilityModel={this.state.conVM} changeAbilityScore={this.changeAbilityScore}/>
          <View_AbilityScore abilityModel={this.state.intVM} changeAbilityScore={this.changeAbilityScore}/>
          <View_AbilityScore abilityModel={this.state.wisVM} changeAbilityScore={this.changeAbilityScore}/>
          <View_AbilityScore abilityModel={this.state.chaVM} changeAbilityScore={this.changeAbilityScore}/>

          <Cont_SavingThrows conVM={this.state.conVM} dexVM={this.state.dexVM} wisVM={this.state.wisVM}
           class={this.props.charClass} race={this.props.charRace} level={this.props.charLevel}/>

          <Cont_Initiative dexVM={this.state.dexVM} />
          <Cont_AttackScore strVM={this.state.strVM} dexVM={this.state.dexVM} charLevel={this.props.charLevel}
          helper_ClassDef={this.state.helper_ClassDef} charSize={this.props.charSize} />

          <Cont_SpellsPerDay charLevel={this.props.charLevel}/>

          <Cont_SkillTable vm_AbilityScores={this.props.vm_AbilityScores} helper_ClassDef={this.state.helper_ClassDef}
            charClass={this.props.charClass} charLevel={this.props.charLevel} charRace={this.props.charRace} />

      </div>
    )
  }
}
