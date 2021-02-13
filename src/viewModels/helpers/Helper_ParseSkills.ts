
import Skills from '../../core/ruleTables/skills.json'

export default class Helper_ParseSkills {

  skillTable: any;

  constructor(){
    this.skillTable = (<any>Skills);
    //console.log(this.classDef);
  }

  getSkillTable(){
    return this.skillTable;
  }


}
