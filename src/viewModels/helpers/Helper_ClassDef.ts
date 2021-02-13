import ElfRace from '../../core/raceDefinitions/elf.json'
import HumanRace from '../../core/raceDefinitions/human.json'
import DruidClass from '../../core/classDefinitions/druid.json'

export default class Helper_ClassDef {

  classDef: any;
  class: string;

  constructor(myClass: string){
    this.classDef = this.getClassDef(myClass);
    this.class = myClass;
    //console.log(this.classDef);
  }

  getHitDie(){
    var hitDie = this.classDef.hitDie;
    return hitDie;
  }

  getAlignments(){
    var alignments = this.classDef.alignments;
    return alignments;
  }

  getKnownSkills(){
    var skills = this.classDef.knownSkills;
    return skills;
  }

  getSkillPointCalc(){
    var skillPoints = this.classDef.skillPoints;
    return skillPoints;
  }

  getweaponProf(){
    var weaponProf = this.classDef.weaponProficiency;
    return weaponProf;
  }

  getArmorProf(){
    var armorProf = this.classDef.armorProficiency;
    return armorProf;
  }

  getSpellInfo(){
    var spellInfo = this.classDef.spellInfo;
    return spellInfo;
  }

  getSaveScores(level: number){
    var levelTable = this.getLevelTable(level);
    var saves = levelTable.saves;
    return saves;
  }

  getBAB(level: number){
    this.classDef = this.getClassDef(this.class);
    var levelTable = this.getLevelTable(level);
    var bab = levelTable.bab;
    return bab;
  }

  getSpellsPerDay(level: number){
    var levelTable = this.getLevelTable(level);
    var spellsPerDay = levelTable.spellsPerDay;
    return spellsPerDay;
  }

  getSpecialAbilities(level: number){
    var levelTable = this.getLevelTable(level);
    var specials = levelTable.special;
    return specials;
  }

  getLevelTable(level: number){
    var levelTableSaves = this.classDef.levelTable[level-1].level;
    //console.log(this.classDef);
    //console.log(this.classDef.levelTable[level-1]);
    return levelTableSaves
  }

  getRaceDef(race: string){
    switch (race) {
      case 'Elf':
        this.raceDef = (<any>ElfRace);
        this.race = "Elf";
        break;
      case 'Human':
        this.raceDef = (<any>HumanRace);
        this.race = "Human";
        break;
      default:
        break;
    }
  }

  getClassDef(myClass: string){
    var classDef;
    switch (myClass) {
      case 'Druid':
        classDef = (<any>DruidClass);
        this.class = "Druid";
        //console.log(this.classDef);
        break;
      default:
        break;
    }

    return classDef;
  }




}
