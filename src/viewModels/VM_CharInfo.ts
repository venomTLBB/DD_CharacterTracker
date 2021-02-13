

export default class VM_CharInfo {

  charName: string;
  race: string;
  charClass: string;
  level: number;
  size: string;

  constructor(charName: string, race: string, charClass: string, level:number, size: string){
    this.charName = charName;
    this.race = race;
    this.charClass = charClass;
    this.level = level;
    this.size = size;
  }
}
