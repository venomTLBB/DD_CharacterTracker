import Helper_ClassDef from './Helper_ClassDef'
//import Helper_SizeDef from './helpers/Helper_SizeDef'

export default class VM_AttackScore {
  attackType: string;
  totalAttack: number;
  bab: number;
  abilityMod: number;
  sizeMod: number;
  spellMod: number;
  miscMod: number;
  helper_ClassDef: Helper_ClassDef;


  constructor(attackType: string, totalAttack: number, bab: number, abilityMod: number, sizeMod: number, spellMod: number, miscMod: number){
    this.attackType = attackType;
    this.totalAttack = totalAttack;
    this.bab = bab;
    this.abilityMod = abilityMod;
    this.sizeMod = sizeMod;
    this.spellMod = spellMod;
    this.miscMod = miscMod;
  }

  constructor(){
    this.attackType = "default";
    this.totalAttack = 0;
    this.bab = 0;
    this.abilityMod = 0;
    this.sizeMod = 0;
    this.spellMod = 0;
    this.miscMod = 0;
  }

  constructor(attackType: string, helper_ClassDef: Helper_ClassDef, abilityMod: number, size: string, spellMod: number, misc: number, level: number){
    this.attackType = attackType;
    this.helper_ClassDef = helper_ClassDef;
    this.bab = this.getBAB(level);
    this.abilityMod = abilityMod;
    this.sizeMod = 0;
    //this.sizeMod = this.calcSizeMod(size); //BROKEN, CAN'T FIGURE OUT
    this.spellMod = spellMod;
    this.miscMod = misc;
    this.calculateTotalAttack();
  }

  getBAB(level: number){
    console.log("ATTACK_VM: getBAB");
    //console.log(this.helper_ClassDef);
    var levelBab = this.helper_ClassDef.getBAB(level);
    console.log("GETBAB: ", levelBab.['1st']);
    return levelBab.['1st']
  }

  calculateTotalAttack(){

    console.log("BAB:", this.bab);
    console.log("ABI:", this.abilityMod);
    console.log("SIZE:", this.sizeMod);
    console.log("SPEL:", this.spellMod);
    console.log("MISC:", this.miscMod);
    this.totalAttack = +this.bab + +this.abilityMod + +this.sizeMod + +this.spellMod + +this.miscMod;
    console.log("TOTAL:", this.totalAttack);

  }


  calcSizeMod(size: string){
    helper_sizeDef = new Helper_SizeDef(size);
    return helper_sizeDef.getAttackAC(size);
  }


}
/*
export default class VM_AttackScoreContainer {
  melee: VM_AttackScore;
  range: VM_AttackScore;

  constructor(melee: VM_AttackScore, range: VM_AttackScore){
    this.melee = melee;
    this.range = range;
  }

}
*/
