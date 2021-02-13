import VM_AbilityScore from './VM_AbilityScore'

export default class VM_SavingThrowScore {

  saveType: string;
  totalScore: number;
  baseScore: number;
  abilityMod: number;
  raceMod: number;
  miscMod: number;
  spellMod: number;
  //multiple spell mods?

  constructor(saveType: string, totalScore: number, baseScore: number, abilityMod: number, raceMod: number,
    spellMod: number, miscMod: number){
    this.saveType = saveType;
    this.totalScore = totalScore;
    this.baseScore = baseScore;
    this.abilityMod = abilityMod;
    this.raceMod = raceMod;
    this.spellMod = spellMod;
    this.miscMod = miscMod;
  }

  constructor(saveType: string){
    this.saveType = saveType;
    this.totalScore = 1;
    this.baseScore = 2;
    this.abilityMod = 3;
    this.raceMod = 4;
    this.miscMod = 5;
  }

  constructor(saveType: string, abilityMod: number ){
    console.log(abilityMod);
    this.saveType = saveType;
    this.totalScore = -99;
    this.baseScore = 2;
    this.abilityMod = abilityMod;
    this.raceMod = 0; //NOT ABILITY RACE MOD NEED HELPER
    this.spellMod = 0;
    this.miscMod = 0;
    this.calcTotalScore();
  }

  setSubScore(scoreName: string, value: number){
    //console.log("I've been called:", scoreName);
    //console.log(scoreName, value);
    //console.log(scoreName);
    //console.log(value);
    this.[scoreName] = value;
    //console.log(this.[scoreName]);
    this.calcTotalScore();
    //console.log("NEW TOTAL SAVE SCORE: ", this.totalScore);
  }

  calcTotalScore(){
    this.totalScore = +this.baseScore + +this.abilityMod + +this.raceMod + +this.spellMod + +this.miscMod;
  }
}
