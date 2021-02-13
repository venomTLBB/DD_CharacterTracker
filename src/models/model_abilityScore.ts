

export default class abilityScore {

  abilityName: string;
  abilityAbriviation: string;

  permMod: number;
  tempMod: number;

  totalScore: number;
  baseScore: number;

  raceScore: number;
  classScore: number;
  itemScore: number;
  levelUpScore: number;
  miscScore: number;

  constructor(abilityName:string, baseScore:number, raceScore:number, classScore:number, itemScore:number, levelUpScore:number, miscScore: number){
    this.abilityName = abilityName;
    this.baseScore = baseScore;
    this.raceScore = raceScore;
    this.classScore = classScore;
    this.itemScore = itemScore;
    this.levelUpScore = levelUpScore;
    this.miscScore = miscScore;
  }

  constructor(abilityName:string, baseScore:number, raceScore:number, classScore:number, levelUpScore:number, miscScore: number){
    this.abilityName = abilityName;
    this.baseScore = baseScore;
    this.raceScore = raceScore;
    this.classScore = classScore;
    this.itemScore = itemScore;
    this.levelUpScore = levelUpScore;
    this.miscScore = miscScore;
  }

  //Don't do logic in model, only in controller
  calcTotalScore()
  {
    this.totalScore = this.baseScore + this.raceScore + this.classScore + this.itemScore + this.levelUpScore + this.miscScore;
  }

  calcTempMod()
  {
    this.tempMod = Math.floor((this.totalScore / 2) - 5);
  }

  calcPermMod()
  {
    var permScore;
    permScore = this.baseScore + this.raceScore + this.classScore + this.levelUpScore;
    this.permMod = Math.floor((permScore / 2) - 5);
  }

}
