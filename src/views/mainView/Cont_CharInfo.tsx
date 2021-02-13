import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View_CharInfo from './View_CharInfo';
import Cont_AbilityScores from './Cont_AbilityScores';

export default class Cont_CharInfo extends React.Component<any, any> {
  /*
  state = {
        charName: this.props.viewModel.charName,
        charClass: this.props.viewModel.charClass,
        level: this.props.viewModel.level,
        race: this.props.viewModel.race,
        size: this.props.viewModel.size
  }
  */
  constructor(props: any) {
  super(props);
  this.state =
    {
      charName: this.props.vm_CharInfo.charName,
      charClass: this.props.vm_CharInfo.charClass,
      level: this.props.vm_CharInfo.level,
      race: this.props.vm_CharInfo.race,
      size: this.props.vm_CharInfo.size
      //viewModel: this.props.viewModel
    };

    this.changeRace = this.changeRace.bind(this);
  }


  changeName(name: string)
  {
    this.setState({charName: name});
  }

  changeRace()
  {
    this.setState({charName: "TESTING FUNCTION"});
  }

  render() {
    return (
      <div>
        <View_CharInfo
          charName={this.state.charName}
          charClass={this.state.charClass}
          charLevel={this.state.level}
          charRace={this.state.race}
          charSize={this.state.size}
          changeRace={this.changeRace}
        />
        <Cont_AbilityScores
          vm_AbilityScores={this.props.vm_AbilityScores}
          charClass={this.state.charClass}
          charLevel={this.state.level}
          charRace={this.state.race}
          charSize={this.state.size}
        />
      </div>
    )
  }
}
