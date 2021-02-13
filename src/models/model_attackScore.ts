

export default class attackScore {

  totalAttack: number;
  attackType: string;
  baseAttack: number;
  abilityMod: number;
  sizeMod: number;
  spellMod: number;
  miscMod: number;

  constructor(attackType: string, baseAttack: number, abilityMod: number, sizeMod: number, spellMod: number, miscMod: number){
    this.attackType = attackType;
    this.baseAttack = baseAttack;
    this.abilityMod = abilityMod;
    this.sizeMod = sizeMod;
    this.spellMod = spellMod;
    this.miscMod = miscMod;
    this.calcTotalAttack();
  }

  calcTotalAttack()
  {
    this.totalAttack = this.baseAttack + this.abilityMod + this.sizeMod + this.spellMod + this.miscMod;
  }

}
