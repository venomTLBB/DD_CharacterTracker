
import VM_SavingThrowScore from "./VM_SavingThrowScore";
import Helper_SavingThrowModifier from "./helpers/Helper_SavingThrowModifier";

export default class VM_SavingThrowScoreContainer {

  fortSave: VM_SavingThrowScore;
  refSave: VM_SavingThrowScore;
  willSave: VM_SavingThrowScore;
  helper: Helper_SavingThrowModifier;

  constructor(fort: VM_SavingThrowScore, ref: VM_SavingThrowScore, will: VM_SavingThrowScore, race: string, class: string){
      this.fortSave = fort;
      this.refSave = ref;
      this.willSave = will;
      this.helper = new Helper_SavingThrowModifier();
  };

  setRacialBonus(race: string){
    this.fortSave = this.helper.getRacialBonus(race, this.fortSave);
    this.refSave = this.helper.getRacialBonus(race, this.refSave);
    this.willSave = this.helper.getRacialBonus(race, this.willSave);
  }

  setBaseScore(myClass: string, level: number){
    this.fortSave = this.helper.getBaseScores(myClass, level, this.fortSave);
    this.refSave = this.helper.getBaseScores(myClass, level, this.refSave);
    this.willSave = this.helper.getBaseScores(myClass, level, this.willSave);

    console.log(this.fortSave);
  }

  setSubScore(saveType: string, subScoreType: string, scoreValue: number){
    //console.log("SaveType: VM_Conatiner: ", saveType);
    this.[saveType].setSubScore(subScoreType, scoreValue);
  }

  setAbilitySubScore(abilityName: string, subScoreName: string, score: number){
    this.[abilityName].setSubScore(subScoreName, score);
  }

  updateTotalScores(){
    this.fortSave.calcTotalScore();
    this.refSave.calcTotalScore();
    this.willSave.calcTotalScore();

    console.log("FORT TOTAL: ", this.fortSave.totalScore);
  }

}
  /*
  setRaceBonus(race: string){
    this.fortScore = this.helper.raceAbilityBonus("str", this.strScore, race);
    this.refScore = this.helper.raceAbilityBonus("dex", this.dexScore, race);
    this.willScore = this.helper.raceAbilityBonus("con", this.conScore, race);
    this.intScore = this.helper.raceAbilityBonus("int", this.intScore, race);
    this.wisScore = this.helper.raceAbilityBonus("wis", this.wisScore, race);
    this.chaScore = this.helper.raceAbilityBonus("cha", this.chaScore, race);
  }
  */
