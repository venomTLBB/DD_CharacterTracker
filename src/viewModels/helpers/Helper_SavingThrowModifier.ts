
import ElfRace from '../../core/raceDefinitions/elf.json'
import HumanRace from '../../core/raceDefinitions/human.json'
import DruidClass from '../../core/classDefinitions/druid.json'

import VM_AbilityScore from '../VM_AbilityScore'
import VM_AbilityScoreContainer from '../VM_AbilityScoreContainer'
import VM_SavingThrowScore from '../VM_SavingThrowScore'

export default class Helper_SavingThrowModifier {

  raceDef: any;
  classDef: any;
  race: string;
  class: string;
  level: number;

  constructor(race: string, myClass: string, level: number){
    this.raceDef = this.getRaceDef(race);
    this.classDef = this.getClassDef(myClass);
    //this.race = race;
    //this.findRace(race);

    //ar elfRace = (<any>ElfRace);
    //console.log(elfRace);
    //console.log(elfRace.savingThrows);
    //this.findRace("Elf");
    //this.raceAbilityBonus();
  }

  getRacialBonus(race: string, vm_SavingThrowScore: VM_SavingThrowScore){
    //console.log("SAVING THROW TYPE: " vm_SavingThrowScore.saveType);
    this.getRaceDef(race);
    //console.log(race);
    var raceSavingThrow = this.raceDef.savingThrows.savingThrowBonus;

    //console.log(raceSavingThrow);
    //console.log(vm_SavingThrowScore.saveType);
    //console.log(raceSavingThrow.fort);

    switch (vm_SavingThrowScore.saveType) {
      case "Fort":
        vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.fort);
        break;
      case "Ref":
        vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.ref);
        break;
      case "Will":
        vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.will);
        break;
      default:
        break;
    }
    return vm_SavingThrowScore;
  }

  getBaseScores(myClass: string, level: number, vm_SavingThrowScore: VM_SavingThrowScore){
    this.getClassDef(myClass);
    //console.log(myClass);
    var classLevelTable = this.classDef.levelTable[level-1].level.saves;

    console.log(classLevelTable);

    //var levelDef = classLevelTable.find(x => x.level.name == level);
    //console.log("TESTING LEVEL DEF: ", levelDef);
    //var levelSaves = levelDef.saves;
    //console.log(levelDef.bab);
    //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.fort);
    //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.ref);
    //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.will);

    switch (vm_SavingThrowScore.saveType) {
      case "Fort":
        vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.fort);
        break;
      case "Ref":
        vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.ref);
        break;
      case "Will":
        vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.will);
        break;
      default:
        break;
    }

    //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);

    return vm_SavingThrowScore;
  }

  getRaceDef(race: string){
    switch (race) {
      case 'Elf':
        this.raceDef = (<any>ElfRace);
        this.race = "Elf";
        break;
      case 'Human':
        this.raceDef = (<any>HumanRace);
        this.race = "Human";
        break;
      default:
        break;
    }
  }

  getClassDef(myClass: string){
    switch (myClass) {
      case 'Druid':
        this.classDef = (<any>DruidClass);
        this.class = "Druid";
        break;
      case 'Human':
        this.raceDef = (<any>DruidClass);
        this.race = "Human";
        break;
      default:
        break;
    }
  }

  getBAB(){
    var classLevelTable = this.classDef.levelTable[level-1].level.bab;
    return classLevelTable;
  }




}
