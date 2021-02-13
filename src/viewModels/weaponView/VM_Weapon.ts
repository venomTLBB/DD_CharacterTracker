import VM_WeaponEnhancement from "./VM_WeaponEnhancement"

export default class VM_Weapon {
  name: string;
  dmgDiceAmount: number; //IE: One dice being rolled
  dmgDiceType: number; //IE: Dice is a D8
  masterwork: boolean;
  weaponBonus: number; //IE: +1 Weapon (figure out logic of masterwork on/off and a weaponBonus)
  attackMod: number; //Item enhancement, +1 to attack chance
  damageMod: number; //Item enhancement, +1 to damage
  critRange: number;
  critMult: number;
  weaponType: string; //MELEE OR RANGE
  enchantment: VM_WeaponEnhancement;
  damageType: string; //BLUNT, SLASH...

  constructor(jsonWeapon: Object, enchantment: VM_WeaponEnhancement){
    //
  }

  constructor(){
    this.name = "I AM GROOT";
  }
}
