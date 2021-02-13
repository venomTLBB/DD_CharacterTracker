

export default class vmHealthScore {

  totalHP: number;
  currHP: number;
  damage: number;
  nonLethal: number;
  bonusHP: number;
  status: string;

  constructor(totalHP: number, currHP: number, damage: number, nonLethal: number, bonusHP: number, status: string){
    this.totalHP = totalHP;
    this.currHP = currHP;
    this.damage = damage;
    this.nonLethal = nonLethal;
    this.bonusHP = bonusHP;
    this.status = status;
  }


}
