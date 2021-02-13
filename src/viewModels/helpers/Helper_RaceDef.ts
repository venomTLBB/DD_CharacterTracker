import ElfRace from '../../core/raceDefinitions/elf.json'
import HumanRace from '../../core/raceDefinitions/human.json'
import DruidClass from '../../core/classDefinitions/druid.json'

export default class Helper_RaceDef {

  raceDef: any;
  race: string;

  constructor(race: string){
    this.raceDef = this.getClassDef(race);
    this.class = race;
    //console.log(this.classDef);
  }

  getSize(){
    return this.raceDef.size;
  }

  getBaseSpeed(){
    return this.raceDef.speed;
  }

  getAbilityBonus(){
    return this.raceDef.abilityBonus;
  }

  getSavingThrowBonus(){
    return this.raceDef.savingThrows.savingThrowBonus;
  }

  getSavingThrowConditional(){
    //FIX THIS, TWO SPERATE OBJECTS, NOT ONE NESTED
    return this.raceDef.savingThrows.conditionialSavingThrowBonus;
  }

  getSkillBonus(){
    return this.raceDef.skillBonus;
  }

  getSkillBonusConditional(){
    return this.raceDef.conditionalSkillBonus;
  }

  getRaceDef(race: string){
    switch (race) {
      case 'Elf':
        return (<any>ElfRace);
        break;
      case 'Human':
        return (<any>HumanRace);
        break;
      default:
        break;
    }
  }
}
