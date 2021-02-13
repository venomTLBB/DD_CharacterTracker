

export default class vmDefenseScore {

  ac: number;
  touch: number;
  flatFoot: number;
  armor: number;
  shield: number;
  natural: number;
  dexMod: number;
  sizeMod: number;
  deflection: number;
  dodge: number;
  circumstance: number;

  constructor(ac: number, touch: number, flatFoot: number, armor: number, shield: number, natural: number, dexMod: number, sizeMod: number,
    deflection: number, dodge: number, circumstance: number){
      this.ac = ac;
      this.touch = touch;
      this.flatFoot = flatFoot;
      this.armor = armor;
      this.shield = shield;
      this.natural = natural;
      this.dexMod = dexMod;
      this.sizeMod = sizeMod;
      this.deflection = deflection;
      this.dodge = dodge;
      this.circumstance = circumstance;
    }
}
