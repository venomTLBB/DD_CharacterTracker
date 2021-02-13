import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_Initiative extends React.Component{
  render() {
      const {
        vm_initiative,
        changingScoreValue
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={"Initiative: "}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.vm_initiative.totalScore}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.vm_initiative.dexMod}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.vm_initiative.featMod}/>
              <input type="number" className="NameInputs" name="spellMod" style={{width: "60px"}} onChange={changingScoreValue} value={this.props.vm_initiative.spellMod}/>
              <input type="number" className="NameInputs" name="miscMod" style={{width: "60px"}} onChange={changingScoreValue} value={this.props.vm_initiative.miscMod}/>
            </div>
          </React.Fragment>
      )
  }
}
