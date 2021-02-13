
export default class VM_InitiativeScore {

  totalScore: number;
  dexMod: number;
  featMod: number; //not sure how to do this;
  spellMod: number;
  miscMod: number;
  //featList: string[]; //make an object of vmFeat?

  constructor(total: number, dexMod: number, featMod: number, spellMod: number, miscMod: number){
    this.totalScore = total;
    this.dexMod = dexMod;
    this.featMod = featMod;
    this.spellMod = spellMod;
    this.miscMod = miscMod;
    this.calcTotalScore();
  }

  constructor(){
    this.totalScore = 0;
    this.dexMod = 0;
    this.featMod = 0;
    this.spellMod = 0;
    this.miscMod = 0;
    this.calcTotalScore();
  }

  calcTotalScore(){
    this.totalScore = +this.dexMod + +this.featMod + +this.spellMod + +this.miscMod;
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
}
