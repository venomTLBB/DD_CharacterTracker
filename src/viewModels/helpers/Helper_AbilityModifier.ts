
import ElfRace from '../../core/raceDefinitions/elf.json'
import HumanRace from '../../core/raceDefinitions/human.json'
import VM_AbilityScore from '../VM_AbilityScore'
import VM_AbilityScoreContainer from '../VM_AbilityScoreContainer'

export default class Helper_AbilityModifier {

  raceDef: any;
  race: string;
  constructor()
  {
    //this.race = race;
    //this.findRace(race);

    //ar elfRace = (<any>ElfRace);
    //console.log(elfRace);
    //console.log(elfRace.savingThrows);
    //this.findRace("Elf");
    //this.raceAbilityBonus();
  }

  raceAbilityBonus(ability: string, vm_abilityScore: VM_AbilityScore, race: string)
  {
    this.findRace(race);
    //console.log(ability);
    //console.log(abilityScore);
    var raceDefAbilityScores = this.raceDef.abilityBonus;
    vm_abilityScore.raceScore = raceDefAbilityScores.[ability];

    vm_abilityScore.setSubScore("raceScore", raceDefAbilityScores.[ability]);
    //ability

    return vm_abilityScore;
  }

  findRace(race: string)
  {
    switch (race) {
      case 'Elf':
        this.raceDef = (<any>ElfRace);
        break;
      case 'Human':
        this.raceDef = (<any>HumanRace);
        break;
      default:
        break;
    }
  }



}
