import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class View_SpellsPerDayLabel extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {
    };

  }

  render() {
    return (
      <div>
        <input type="text" className="NameInputs" name="" style={{width: "75px"}} value={"Spell lvl"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"0th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"1st"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"2nd"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"3rd"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"4th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"5th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"6th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"7th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"8th"}/>
        <input type="text" className="NameInputs" name="baseScore" style={{width: "25px"}} value={"9th"}/>
      </div>
    )
  }
}
