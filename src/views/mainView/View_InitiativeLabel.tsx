import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class View_InitiativeLabel extends React.Component{
  render() {
      const {
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={""}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Total"}/>
              <input type="text" className="NameInputs" name="baseScore" style={{width: "60px"}} value={"Dex"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Feat"}/>
              <input type="text" className="NameInputs" name="raceMod" style={{width: "60px"}} value={"Spells"}/>
              <input type="text" className="NameInputs" name="spellMod" style={{width: "60px"}} value={"Misc"}/>
            </div>
          </React.Fragment>
      )
  }
}
