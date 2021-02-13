import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const styles = {
    input: {
        width: '12px'
    },
    button: {
        margin: '12px 0'
    },
    buttonSmall: {
        width: 'auto'
    },
}

export default class View_AbilityScore extends React.Component{
  render() {
      const {
        abilityModel,
        changeAbilityScore
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={this.props.abilityModel.abilityLabel}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityModel.totalScore}/>
              <input type="number" className="NameInputs" name="baseScore" id={this.props.abilityModel.abilityLabel} onChange={changeAbilityScore} style={{width: "60px"}} value={this.props.abilityModel.baseScore}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityModel.raceScore}/>
              <input type="number" className="NameInputs" name="levelUpScore" id={this.props.abilityModel.abilityLabel} onChange={changeAbilityScore} style={{width: "60px"}} value={this.props.abilityModel.levelUpScore}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityModel.permMod}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityModel.itemScore}/>
              <input type="number" className="NameInputs" name="spellScore" id={this.props.abilityModel.abilityLabel} onChange={changeAbilityScore} style={{width: "60px"}} value={this.props.abilityModel.spellScore}/>
              <input type="number" className="NameInputs" name="miscScore" id={this.props.abilityModel.abilityLabel} onChange={changeAbilityScore} style={{width: "60px"}} value={this.props.abilityModel.miscScore}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.props.abilityModel.tempMod}/>
            </div>
          </React.Fragment>
      )
  }
}
