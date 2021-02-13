import * as React from 'react';
import { RouteComponentProps } from 'react-router';



export default class View_AbilityLabels extends React.Component{
  render() {
      const {
      } = this.props

      return (
          <React.Fragment>
            <div>
              <input type="text" className="" name=""  style={{width: "75px"}} value={"Abilities"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Total"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Base"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Race"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"LevelUp"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"PermMod"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Items"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Spells"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"Misc"}/>
              <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={"TempMod"}/>
            </div>
          </React.Fragment>
      )
  }
}
