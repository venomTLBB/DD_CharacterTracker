

export default class View_Skill extends React.Component{
      constructor(props: any){
        super(props);
        this.state =
        {
          classSkill: "",
          skillMod: 0,
          abiType: "DEF",
          rank: 0,
          //abilityMod: thi
          feats: 0, //COME FROM PROPS???
          misc: 0,//FROM PROPS????
          synergy: 0,
          cost: 0,
          abiMod: -9
        };

        this.changeScore = this.changeScore.bind(this);
        this.changeRank = this.changeRank.bind(this);
        this.changeMisc = this.changeMisc.bind(this);
        this.calcTotal = this.calcTotal.bind(this);
        this.isTrainedSkill = this.isTrainedSkill.bind(this);
        this.calcSkillCost = this.calcSkillCost.bind(this);
      }

      componentDidMount(){
        //console.log("VIEW SKILL: ", this.props.skill.skill)
        this.calcTotal();
        this.isTrainedSkill();
      }

      componentWillReceiveProps(){
        //UPDATE TOTAL
        this.calcTotal();
      }

      changeScore(evt){
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        this.setState({})
      }

      async changeRank(evt){
        var oldCost = this.state.cost;
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        //console.log("RANK CHANGE VALUE: ", evt.target.value)
        //total = +total + 1;
        await this.setState({rank: evt.target.value});
        //console.log("RANK STATE VALUE: ", this.state.rank)
        this.calcTotal();
        this.calcSkillCost();
        this.props.updateSkillPoints(this.state.cost, oldCost);
      }

      async changeMisc(evt){
        await this.setState({misc: evt.target.value});
        //console.log("RANK STATE VALUE: ", this.state.rank)
        this.calcTotal();
      }

      calcTotal(){
        var total = 0;
        //console.log("ABILITY MOD: ", this.props.abilityMod)
        //console.log("RANK: ", this.state.rank)
        //console.log("SKILLMOD BEFORE: ", this.state.skillMod)
        total = +this.state.rank + +this.state.feats + +this.state.misc + +this.state.synergy + +this.props.abilityMod;
        //console.log("SKILLMOD TOTAL: ", total)
        this.setState({skillMod: total});
        //console.log("SKILLMOD AFTER: ", this.state.skillMod)
      }

      calcSkillCost(){
        if(this.state.classSkill === "X"){
          this.setState({cost: this.state.rank})
        }
        else{
          this.setState({cost: this.state.rank*2})
        }
      }

      isTrainedSkill(){
        //console.log("CLASS SKILLS INSIDE VIEW:", this.props.classSkills)
        console.log("VIEW SKILL: ", this.props.skill.skill);
        if(this.props.classSkills !== undefined){
          this.props.classSkills.forEach(element => {
            //console.log("CLASS SKILL ELEMENT: ", element);
            if(element.skill === this.props.skill.skill){
              console.log("SKILL MATCH");
              this.setState({classSkill: "X"})
            }
          });
        }
      }


      render() {
        return (
            <React.Fragment>
              <div>
                <input type="text" className="NameInputs" name="synergy" style={{width: "20px"}} value={"UT"}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "20px"}} value={this.state.classSkill}/>
                <input type="text" className="" name=""  style={{width: "170px"}} value={this.props.skill.skill}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.skill.abi}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.state.skillMod}/>
                <input type="number" className="NameInputs" name="baseScore" onChange={this.changeRank} style={{width: "60px"}} value={this.state.rank}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityMod}/>
                <input type="text" className="NameInputs" name="feat" style={{width: "60px"}} value={this.state.feats}/>
                <input type="number" className="NameInputs" name="misc" onChange={this.changeMisc} style={{width: "60px"}} value={this.state.misc}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "60px"}} value={this.state.synergy}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "60px"}} value={this.state.cost}/>

              </div>
            </React.Fragment>
        )
      }
    }
