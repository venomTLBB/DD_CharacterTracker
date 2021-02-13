import VM_Skill from './VM_Skill'

export default class VM_SkillContainer {

  skillArray: [];

  constructor(){
    this.skillArray = [];
    //this.skillArray.push(new VM_Skill());
    //console.log("TEST: " ,this.skillArray);
  }

  addSkill(skillVM: VM_Skill){
    this.skillArray.push(skillVM);
  }

  getSkillArray(){
    return this.skillArray;
  }




}
