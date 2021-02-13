import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_AttackScore extends React.Component{
  render() {
      const {
        attackVM,
        abilityMod,
        changeValue
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={this.props.attackVM.attackType}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.attackVM.totalAttack}/>
              <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={this.props.attackVM.bab}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityMod}/>
              <input type="text" className="NameInputs" name="raceMod" style={{width: "60px"}} value={this.props.attackVM.sizeMod}/>
              <input type="number" className="NameInputs" name="spellMod" style={{width: "60px"}} id={this.props.attackVM.attackType} onChange={changeValue} value={this.props.attackVM.spellMod}/>
              <input type="number" className="NameInputs" name="miscMod" style={{width: "60px"}} id={this.props.attackVM.attackType} onChange={changeValue} value={this.props.attackVM.miscMod}/>
            </div>
          </React.Fragment>
      )
  }
}
