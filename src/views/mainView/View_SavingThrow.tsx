import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_SavingThrow extends React.Component{
  render() {
      const {
        saveVM,
        abilityVM,
        changeSavingThrowValue
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={this.props.saveVM.saveType}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.saveVM.totalScore}/>
              <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={this.props.saveVM.baseScore}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityVM.tempMod}/>
              <input type="text" className="NameInputs" name="raceMod" style={{width: "60px"}} value={this.props.saveVM.raceMod}/>
              <input type="number" className="NameInputs" name="spellMod" style={{width: "60px"}} id={this.props.saveVM.saveType} onChange={changeSavingThrowValue} value={this.props.saveVM.spellMod}/>
              <input type="number" className="NameInputs" name="miscMod" style={{width: "60px"}} id={this.props.saveVM.saveType} onChange={changeSavingThrowValue} value={this.props.saveVM.miscMod}/>
            </div>
          </React.Fragment>
      )
  }
}
