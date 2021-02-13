import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class View_SpellsPerDay extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {
      //PROPS: LABEL:
    };

  }

  componentDidMount(){
    console.log("SPELLS PER DAY VIEW : ", this.props.spellsPerDay.c0);
  }

  render() {
    return (
      <div>
        <input type="text" className="NameInputs" name="" style={{width: "75px"}} value={this.props.viewLabel}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["0"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["1"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["2"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["3"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["4"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["5"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["6"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["7"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["8"]}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={this.props.spellsPerDay.["9"]}/>
      </div>
    )
  }
}
