

export default class defenseScore {

  ac: number;
  touchAC: number;
  flatFootAC: number;
  armor: number;
  shield: number;
  natural: number;
  dexMod: number;
  dodgeMod: number;
  sizeMod: number;
  spellMod: number;
  cercumstanceMod: number; //Envrionment modifications like mud/sand and other things

  constructor(armor:number, shield:number, natural:number, dexMod:number, sizeMod:number){
    this.armor = armor;
    this.shield = shield;
    this.natural = natural;
    this.dexMod = dexMod;
    this.sizeMod = sizeMod;
  }

  calcAC()
  {
    this.ac = this.armor + this.shield + this.natural + this.dexMod + this.dodgeMod + this.sizeMod + this.spellMod + this.cercumstanceMod;
  }

  calcFlatFootAC()
  {
    this.flatFootAC = this.ac - this.dexMod;
  }

  calcTouchAC()
  {
    this.touchAC = this.ac - this.armor - this.shield - this.natural;
  }

  calcStats()
  {
    this.calcAC();
    this.calcFlatFootAC();
    this.calcStats();
  }

}
