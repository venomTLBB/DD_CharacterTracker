

export default class Model_SavingThrowScore {

  saveName: string;
  saveTotal: number;

  saveBase: number; //based off character level and class
  abilityMod: number; //based off type of save
  raceMod: number; //based off race
  spellMod: number; //modifcation from any spells

  //raceConditional: number; //race modifiations based on conditional requirments (EX: +1 Fort save to poisons only)
  //make conditional a list?

  constructor(saveName: string, saveBase: number, abilityMod: number, raceMod: number){
    this.saveName = saveName;
    this.saveBase = saveBase;
    this.abilityMod = abilityMod;
    this.raceMod = raceMod;
  }

  constructor(saveName: string){
    this.saveName = saveName;
    this.saveBase = 1;
    this.abilityMod = -9;
    this.raceMod = 9;
  }

  calcTotal()
  {
    this.saveTotal = this.saveBase + this.abilityMod + this.raceMod;
  }


}
