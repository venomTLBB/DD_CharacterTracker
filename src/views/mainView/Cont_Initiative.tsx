import * as React from 'react';
import * as ReactDOM from 'react-dom';

import View_Initiative from './View_Initiative'
import View_InitiativeLabel from './View_InitiativeLabel'
import VM_InitiativeScore from '../../viewModels/VM_InitiativeScore.ts';
import Helper_Initiative from "../../viewModels/helpers/Helper_Initiative";
export default class Cont_Initiative extends React.Component{

  //Props
  //dexVM

  constructor(props: any)
  {
    super(props);
    this.state =
    {
      vm_initiative: new VM_InitiativeScore()
    };
    this.changingScoreValue = this.changingScoreValue.bind(this);
  }

  componentWillReceiveProps(){
    var copy = this.state.vm_initiative;
    copy.setSubScore("dexMod", this.props.dexVM.tempMod);
    this.setState({ vm_initiative: copy});
  }

  componentDidMount(){
    //set up vm_initiative
    var copy = this.state.vm_initiative;
    copy.setSubScore("dexMod", this.props.dexVM.tempMod);
    this.setState({ vm_initiative: copy});
  }

  changingScoreValue(evt)
  {
    var copy = this.state.vm_initiative;
    copy.setSubScore(evt.target.name, evt.target.value);
    this.setState({ vm_initiative: copy});
  }

  render() {
    return (
      <React.Fragment>
      <div>
        ''
        <View_InitiativeLabel />
        <div>
          <View_Initiative vm_initiative={this.state.vm_initiative} changingScoreValue={this.changingScoreValue}/>
        </div>
      </div>
      </React.Fragment>
    )
  }

}
