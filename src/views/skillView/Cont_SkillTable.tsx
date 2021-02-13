import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Helper_ClassDef from "../../viewModels/helpers/Helper_ClassDef"
import Helper_ParseSkills from "../../viewModels/helpers/Helper_ParseSkills"
import VM_Skill from "../../viewModels/VM_Skill"
import VM_SkillsContainer from "../../viewModels/VM_SkillsContainer"
import View_Skill from "./View_Skill"
import View_SkillLabel from "./View_SkillLabel"
import skillJSON from "../../core/ruleTables/skills.json"

export default class Cont_SkillTable extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {
      //PROPS: vm_AbilityScores, helper_ClassDef, helper_RaceDef(FIX THIS)
      //PROPS: Class, Race
      maxPoints: 0,
      spentPoints: 0,
      remainingPoints: 0,
      //helper_ParseSkills: new Helper_ParseSkills(),
      //vm_skillContainer: new VM_SkillsContainer(),
      skillArray: skillJSON,
      classSkills: this.props.helper_ClassDef.getKnownSkills()
    };
    this.selectAbilityMod = this.selectAbilityMod.bind(this);
    this.selectPermAbilityMod = this.selectAbilityMod.bind(this);
    this.updateSkillPoints = this.updateSkillPoints.bind(this);
    this.getClassSkills = this.getClassSkills.bind(this);
    this.calcMaxSkillPoints = this.calcMaxSkillPoints.bind(this);
  }

  async componentDidMount(){
    //LOAD UP skillArray
    //this.getClassSkills();
    console.log("CLASS SKILLS TREE: ", this.state.classSkills);
    await this.calcMaxSkillPoints();
    await this.setSkillPoints();
    //var parsedSkills = this.state.helper_ParseSkills.getSkillTable();
    //var copyModel = this.state.vm_skillContainer;
    //var abiMod;
    //var test = JSON.parse(SkillJSON);
    /*
    console.log("OnPageLoad: ", parsedSkills);

    parsedSkills.skillsList.forEach(element =>{
      abiMod = this.selectAbilityMod(element.abi);
      copyModel.addSkill(new VM_Skill(element.skill, element.abi, abiMod, 0, 0, 0, 0, element.ut, true));

    });
    this.setState({ vm_skillContainer: copyModel});
    console.log("AFTER LOOP: ", this.state.vm_skillContainer);
    */
    //console.log("SKILL ARRAY STATE: ", this.state.skillArray);
    //console.log("TESTING SKILL ABILITY CHAS: ", this.selectAbilityMod(this.state.skillArray.skillsList[0].abi));

    /*
    for (let index = 0; index < 42; index++) {
      console.log("abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[", index, "].abi)}")
    }
    */
  }

  async componentWillReceiveProps(){
    await this.calcMaxSkillPoints();
    await this.setSkillPoints();
  }

  setSkillPoints(){
    //calc max points
    //calc spent points
    //calc remaining points

    var remPoints = this.state.maxPoints - this.state.spentPoints;
    console.log("MAX POINTS: ", this.state.maxPoints);
    console.log("REMAINING POINTS: ", remPoints);
    console.log("REMAINING POINTS: ", remPoints);
    this.setState({remainingPoints: this.state.maxPoints - this.state.spentPoints})
  }

  calcMaxSkillPoints(){
    var classSkillPoints = this.props.helper_ClassDef.getSkillPointCalc();
    //console.log("MAX SKILL POINTS: ", test);
    var firstlevel = classSkillPoints.firstLevel.add + (this.selectPermAbilityMod(classSkillPoints.firstLevel.abilityMod) * classSkillPoints.firstLevel.product);
    //console.log("MAX SKILL FIRST LEVEL: ", firstlevel);
    var levelUp = ((this.selectPermAbilityMod(classSkillPoints.levelUp.abilityMod) + classSkillPoints.levelUp.add)*this.props.charLevel);
    //console.log("MAX SKILL POINTS PER LEVEL: ", levelUp);
    this.setState({maxPoints: firstlevel + levelUp});
  }

  getClassSkills(){
    var classSkills = this.props.helper_ClassDef.getKnownSkills();
    console.log("CLASS SKILLS TREE: ", classSkills);
  }

  async updateSkillPoints(skillCost: number, oldCost: number){
    console.log("updatePoints: ", skillCost, oldCost)
    await this.setState({spentPoints: this.state.spentPoints + (skillCost - oldCost)});
    await this.setState({remainingPoints: this.state.maxPoints - this.state.spentPoints});
  }

  selectAbilityMod(abiType: string){
    switch (abiType) {
      case "STR":
        return this.props.vm_AbilityScores.strScore.tempMod;
        break;
      case "DEX":
        return this.props.vm_AbilityScores.dexScore.tempMod;
        break;
      case "CON":
        return this.props.vm_AbilityScores.conScore.tempMod;
        break;
      case "INT":
        return this.props.vm_AbilityScores.intScore.tempMod;
        break;
      case "WIS":
        return this.props.vm_AbilityScores.wisScore.tempMod;
        break;
      case "CHA":
        return this.props.vm_AbilityScores.chaScore.tempMod;
        break;
      default:
        break;
    }
  }

  selectPermAbilityMod(abiType: string){
    switch (abiType) {
      case "STR":
        return this.props.vm_AbilityScores.strScore.permMod;
        break;
      case "DEX":
        return this.props.vm_AbilityScores.dexScore.permMod;
        break;
      case "CON":
        return this.props.vm_AbilityScores.conScore.permMod;
        break;
      case "INT":
        return this.props.vm_AbilityScores.intScore.permMod;
        break;
      case "WIS":
        return this.props.vm_AbilityScores.wisScore.permMod;
        break;
      case "CHA":
        return this.props.vm_AbilityScores.chaScore.permMod;
        break;
      default:
        break;
    }
  }



  render() {
    return (
      <div>
        ""
        <View_SkillLabel spentPoints={this.state.spentPoints} remainingPoints={this.state.remainingPoints}/>
        <View_Skill skill={this.state.skillArray.skillsList[0]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[0].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[1]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[1].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[2]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[2].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[3]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[3].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[4]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[4].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[5]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[5].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[6]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[6].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[7]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[7].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[8]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[8].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[9]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[9].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[10]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[10].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[11]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[11].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[12]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[12].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[13]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[13].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[14]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[14].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[15]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[15].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[16]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[16].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[17]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[17].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[18]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[18].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[19]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[19].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[20]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[20].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[21]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[21].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[22]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[22].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[23]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[23].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[24]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[24].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[25]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[25].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[26]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[26].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[27]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[27].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[28]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[28].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[29]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[29].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[30]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[30].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[31]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[31].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[32]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[32].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[33]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[33].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[34]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[34].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[35]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[35].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[36]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[36].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[37]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[37].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[38]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[38].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[39]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[39].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[40]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[40].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
        <View_Skill skill={this.state.skillArray.skillsList[41]} abilityMod={this.selectAbilityMod(this.state.skillArray.skillsList[41].abi)} updateSkillPoints={this.updateSkillPoints} classSkills={this.state.classSkills} />
      </div>
    )
  }
}
