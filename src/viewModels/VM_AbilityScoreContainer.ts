
import VM_AbilityScore from "./VM_AbilityScore";
import Helper_AbilityModifier from "./helpers/Helper_AbilityModifier";

export default class VM_AbilityScoreContainer {

  strScore: VM_AbilityScore;
  dexScore: VM_AbilityScore;
  conScore: VM_AbilityScore;
  intScore: VM_AbilityScore;
  wisScore: VM_AbilityScore;
  chaScore: VM_AbilityScore;
  helper: Helper_AbilityModifier;

  constructor(str: VM_AbilityScore, dex: VM_AbilityScore, con: VM_AbilityScore, int: VM_AbilityScore,
    wis: VM_AbilityScore, cha: VM_AbilityScore){
      this.strScore = str;
      this.dexScore = dex;
      this.conScore = con;
      this.intScore = int;
      this.wisScore = wis;
      this.chaScore = cha;
      this.helper = new Helper_AbilityModifier();
  };

  setAbilitySubScore(abilityName: string, subScoreName: string, score: number){
    this.[abilityName].setSubScore(subScoreName, score);
  }

  setBaseScore(ability: string, score: number){
    this.[ability].baseScore = score;
  }

  setRaceBonus(race: string){
    this.strScore = this.helper.raceAbilityBonus("str", this.strScore, race);
    this.dexScore = this.helper.raceAbilityBonus("dex", this.dexScore, race);
    this.conScore = this.helper.raceAbilityBonus("con", this.conScore, race);
    this.intScore = this.helper.raceAbilityBonus("int", this.intScore, race);
    this.wisScore = this.helper.raceAbilityBonus("wis", this.wisScore, race);
    this.chaScore = this.helper.raceAbilityBonus("cha", this.chaScore, race);
  }



}
