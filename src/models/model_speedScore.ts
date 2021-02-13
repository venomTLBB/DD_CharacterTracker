

export default class speedScore {

  baseSpeed: number;
  moveSpeed: number;
  runSpeed: number;
  race: string;
  armorType: string;

  constructor(baseSpeed: number, race: string, armorType: string){
    this.baseSpeed = baseSpeed;
    this.race = race;
    this.armorType = armorType;
  }

}
