import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Model_SavingThrowScore from '../../models/Model_SavingThrowScore'
import VM_SavingThrowScore from '../../viewModels/VM_SaveingThrowScore.ts'
import VM_SavingThrowScoreContainer from '../../viewModels/VM_SavingThrowScoreContainer.ts'
import View_SavingThrow from './View_SavingThrow'
import View_SavingThrowLabel from './View_SavingThrowLabels'
import Helper_SavingThrowModifier from "../../viewModels/helpers/Helper_AbilityModifier";


export default class Cont_SavingThrows extends React.Component{

  constructor(props: any)
  {
    super(props);
    this.state =
    {
      //
      //props:
      //conVM, dexVM, wisVM, race, class, level
      //
      //vm_FortSave: new VM_SavingThrowScore("Fort", this.props.conVM.tempMod),
      //vm_RefSave: new VM_SavingThrowScore("Ref", this.props.dexVM.tempMod),
      //vm_WillSave: new VM_SavingThrowScore("Will", this.props.wisVM.tempMod),
      helper: new Helper_SavingThrowModifier(),
      vm_container: new VM_SavingThrowScoreContainer(new VM_SavingThrowScore("Fort", this.props.conVM.tempMod),
        new VM_SavingThrowScore("Ref", this.props.dexVM.tempMod), new VM_SavingThrowScore("Will", this.props.wisVM.tempMod))
      //vm_AbilityScores: this.props.vm_AbilityScores,
      //dexScore: this.props.vm_AbilityScores.dexScore,
    };
    this.changeSavingThrowValue = this.changeSavingThrowValue.bind(this);
    this.setRacialBonus = this.setRacialBonus.bind(this);
    this.setClassBaseScore = this.setClassBaseScore.bind(this);
    this.updateAbilityMod = this.updateAbilityMod.bind(this);
  }

  componentWillReceiveProps(){
    this.updateAbilityMod();
  }

  componentDidMount(){
    this.setRacialBonus(this.props.race);
    this.setClassBaseScore(this.props.class, this.props.level);
  }

  setRacialBonus(race: string){
    var copy = this.state.vm_container;
    copy.setRacialBonus(race);
    //console.log(copy);
    this.setState({ vm_container: copy});
  }

  setClassBaseScore(myClass: string, level: number)
  {
    var copy = this.state.vm_container;
    copy.setBaseScore(myClass, level);
    this.setState({ vm_container: copy});
  }

  updateAbilityMod(){
    this.state.vm_container.setSubScore("fortSave", "abilityMod", this.props.conVM.tempMod);
    this.state.vm_container.setSubScore("refSave", "abilityMod", this.props.dexVM.tempMod);
    this.state.vm_container.setSubScore("willSave", "abilityMod", this.props.wisVM.tempMod);

    var copy = this.state.vm_container;
    this.setState({ vm_container: copy});
  }

  changeSavingThrowValue(evt){
    //this.setRacialBonus("Human");
    var copy = this.state.vm_container;

    /*
    console.log(evt.target.id);
    console.log(evt.target.name);
    console.log(evt.target.value);
    */
    switch (evt.target.id) {
      case "Fort":
        //copy = this.state.vm_container.fortSave;
        copy.setSubScore("fortSave" ,evt.target.name, evt.target.value);
        this.setState({ vm_container: copy});
        break;
      case "Ref":
        //copy = this.state.vm_container.refSave;
        copy.setSubScore("refSave", evt.target.name, evt.target.value);
        this.setState({ vm_container: copy});
        break;
      case "Will":
        //copy = this.state.vm_container.willSave;
        copy.setSubScore("willSave", evt.target.name, evt.target.value);
        this.setState({ vm_container: copy});
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
      <div>
        break
        <View_SavingThrowLabel />
        <div>
        <View_SavingThrow saveVM={this.state.vm_container.fortSave} abilityVM={this.props.conVM} changeSavingThrowValue={this.changeSavingThrowValue}/>
        <View_SavingThrow saveVM={this.state.vm_container.refSave} abilityVM={this.props.dexVM} changeSavingThrowValue={this.changeSavingThrowValue}/>
        <View_SavingThrow saveVM={this.state.vm_container.willSave} abilityVM={this.props.wisVM} changeSavingThrowValue={this.changeSavingThrowValue}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
  }
