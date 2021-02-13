import * as React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FooView from "./views/FooView";
import BarView from "./views/BarView";
import { Layout } from "./views/Layout";
import "./styles/main.scss";

import Cont_CharInfo from "./views/mainView/Cont_CharInfo.tsx";
import VM_CharInfo from "./viewModels/VM_CharInfo.ts";
import VM_AbilityScore from "./viewModels/VM_AbilityScore";
import VM_AbilityScoreContainer from "./viewModels/VM_AbilityScoreContainer";
//IMPORT CHARINFO MODEL


/*
export default function App() {
    return (
      <div>
        <div className="sidebar">
            test
        </div>
      </div>
    );
}
*/

class App extends React.Component<any, any>{

  constructor(props) {
        super(props)
        this.vm_CharInfo = new VM_CharInfo("Wikus", "Human", "Druid", 8, "Medium") //load view modal with Model via JSON data

        this.VM_AbilityScoreContainer = new VM_AbilityScoreContainer(
          new VM_AbilityScore("STR"),
          new VM_AbilityScore("DEX"),
          new VM_AbilityScore("CON"),
          new VM_AbilityScore("INT"),
          new VM_AbilityScore("WIS"),
          new VM_AbilityScore("CHA")
        );
    }

    render() {
      console.log(VM_AbilityScoreContainer);
      this.VM_AbilityScoreContainer.setRaceBonus("Elf");
      //this.VM_AbilityScoreContainer.setAbilitySubScore("strScore", "baseScore", 11);
      console.log(VM_AbilityScoreContainer);
        return (
          <div>
            <Cont_CharInfo vm_CharInfo={this.vm_CharInfo} vm_AbilityScores={this.VM_AbilityScoreContainer}/>
          </div>
        )
    }
}

export default App
