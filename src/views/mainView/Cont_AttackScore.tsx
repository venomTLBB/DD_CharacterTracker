import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Helper_ClassDef from "../../viewModels/helpers/Helper_ClassDef"

import VM_AttackScore from '../../viewModels/VM_AttackScore';

import View_AttackScore from './View_AttackScore'
import View_AttackScoreLabel from './View_AttackScoreLabel'
import Cont_Weapons from "../weaponView/Cont_Weapons"

export default class Cont_AttackScore extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {
      //props:
      //BAB, strVM, dexVM, size
      //charLevel
      //charRace
      //charSize
      //helper_ClassDef
      vm_meleeAttack: new VM_AttackScore("Melee", this.props.helper_ClassDef, this.props.strVM.tempMod,
        this.props.charSize, 0, 0, this.props.charLevel),
      vm_rangeAttack: new VM_AttackScore("Range", this.props.helper_ClassDef, this.props.dexVM.tempMod,
        this.props.charSize, 0, 0, this.props.charLevel)
      /*
      vm_AttackScoreContainer: new VM_AttackScoreContainer(
        new VM_AttackScore("Melee", 0, this.props.helper_ClassDef, this.props.strVM.tempMod,
          this.props.charSize, 0, 0, this.props.charLevel),
      )
      */
    };
    this.changeAttackScore = this.changeAttackScore.bind(this);
  }

  changeAttackScore(evt)
  {

  }

  render() {
    return (
      <div>
        ''
        <View_AttackScoreLabel />
        <View_AttackScore attackVM={this.state.vm_meleeAttack} abilityMod={this.props.strVM.tempMod} changeValue={this.changeAttackScore} />
        <View_AttackScore attackVM={this.state.vm_rangeAttack} abilityMod={this.props.dexVM.tempMod} changeValue={this.changeAttackScore} />
        ""
        <Cont_Weapons charClass={this.props.charClass}/>
      </div>
    )
  }

}
