

export default class VM_AbilityScore {

  abilityLabel: string;
  totalScore: number;
  permMod: number;
  tempMod: number;
  baseScore: number;
  raceScore: number;
  itemScore: number;
  levelUpScore: number;
  miscScore: nubmer;
  spellScore: number;

  constructor(abilityLabel: string, totalScore: number, baseScore: number, raceScore: number, itemScore: number,
    levelUpScore: number, miscScore: nubmer, spellScore: number, permMod: number, tempMod: number){
      this.abilityLabel = abilityLabel;
      this.totalScore = totalScore;
      this.baseScore = baseScore;
      this.raceScore = raceScore;
      this.itemScore = itemScore;
      this.levelUpScore = levelUpScore;
      this.miscScore = miscScore;
      this.spellScore = spellScore;
      this.permMod = permMod;
      this.tempMod = tempMod;
    }

    constructor(abilityLabel: string){
      this.abilityLabel = abilityLabel;
      this.baseScore = 14;
      this.raceScore = -99;
      this.itemScore = 0;
      this.levelUpScore = 0;
      this.miscScore = 0;
      this.spellScore = 0;
      this.totalScore = -9;
      this.permMod = -9;
      this.tempMod = -9;
    }

    setSubScore(scoreName: string, value: number)
    {
      //console.log(scoreName);
      //console.log(value);
      this.[scoreName] = value;
      this.calcTotalScore();
    }

    setAbilityLabel(label: string)
    {
      this.abilityLabel = label;
    }

    calcTotalScore()
    {
      console.log("TOTAL SCORE", this.totalScore);
      console.log("BASE SCORE", this.baseScore);
      console.log("RACE SCORE", this.raceScore);
      console.log("ITEM SCORE", this.itemScore);
      console.log("LVL SCORE", this.levelUpScore);
      console.log("MISC SCORE", this.miscScore);
      console.log("SPELL SCORE", this.spellScore);
      console.log("PERMMOD SCORE", this.permMod);
      console.log("TEMPMOD SCORE", this.tempMod);
      console.log("BASE SCORE", this.baseScore);
      this.totalScore = +this.baseScore + +this.raceScore + +this.itemScore + +this.levelUpScore + +this.miscScore + +this.spellScore;
      console.log("TOTAL SCORE AFTER CALC", this.totalScore);
      this.calcMods();
    }

    calcMods()
    {
      this.permMod = Math.floor(((this.totalScore - this.itemScore - this.miscScore - this.spellScore) / 2) -5);
      this.tempMod = Math.floor((this.totalScore / 2) -5);
      console.log(this.totalScore);
      console.log(this.permMod);
      console.log(this.tempMod);
    }



}
