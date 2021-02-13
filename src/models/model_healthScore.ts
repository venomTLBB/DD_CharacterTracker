

export default class healthScore {

  currentHP: number;
  totalHP: number;
  damage: number;
  nonLethal: number;
  status: string;

  constructor(totalHP: number, damage: number, nonLethal: number){
    this.totalHP = totalHP;
    this.damage = damage;
    this.nonLethal = nonLethal;
    this.currentHP = this.calcCurrentHP();
  }

  calcCurrentHP()
  {
    this.currentHP = this.totalHP - this.damage;
  }

}
