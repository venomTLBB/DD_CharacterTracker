import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_SavingThrowLabel extends React.Component{
  render() {
      const {
        saveVM,
        abilityVM,
        testChange
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={"Saves"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Total"}/>
              <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={"Base"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Abi Mod"}/>
              <input type="text" className="NameInputs" name="levelUpScore" style={{width: "60px"}} value={"Race"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Spell"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Misc"}/>
            </div>
          </React.Fragment>
      )
  }
}
