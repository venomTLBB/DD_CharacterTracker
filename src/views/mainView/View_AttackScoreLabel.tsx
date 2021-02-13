import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_AttackScoreLabel extends React.Component{
  render() {
      const {

      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={"Attack"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Total"}/>
              <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={"BAB"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Abi Mod"}/>
              <input type="text" className="NameInputs" name="raceMod" style={{width: "60px"}} value={"Size"}/>
              <input type="text" className="NameInputs" name="spellMod" style={{width: "60px"}} value={"Spell"}/>
              <input type="text" className="NameInputs" name="miscMod" style={{width: "60px"}} value={"Misc"}/>
            </div>
          </React.Fragment>
      )
  }
}
