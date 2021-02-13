

export default class View_SkillLabel extends React.Component{
      constructor(props: any){
        super(props);
        this.state =
        {
        };
      }

      render() {
        return (
            <React.Fragment>
              <div>
                <input type="text" className="NameInputs" name="synergy" style={{width: "20px"}} value={"UT"}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "20px"}} value={"CS"}/>
                <input type="text" className="" name=""  style={{width: "170px"}} value={"Skill"}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Abi"}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Skill Mod"}/>
                <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={"Rank"}/>
                <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Abi Mod"}/>
                <input type="text" className="NameInputs" name="feat" style={{width: "60px"}} value={"Feats"}/>
                <input type="text" className="NameInputs" name="misc" style={{width: "60px"}} value={"Misk"}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "60px"}} value={"Synergy"}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "60px"}} value={this.props.spentPoints}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "80px"}} value={"Rem Points"}/>
                <input type="text" className="NameInputs" name="synergy" style={{width: "80px"}} value={this.props.remainingPoints}/>
              </div>
            </React.Fragment>
        )
      }
    }
