import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlayerInfo from './PlayerInfo'
import RaceSelect from './RaceSelect'
import SizeSelect from './SizeSelect'
import SizeSpace from './SizeSpace'
import ClassSelect from './ClassSelect'
import AbilityScores from './AbilityScores'
import WeaponSelect from './WeaponSelect'

import SkillTable from '@renderer/Skill_Components/SkillTable'
// Import the styles here to process them with webpack
import '@public/style.css';
import '@styles/general/row.css'
//import CSS

class CharacterPage extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    this.state = {
      race: "Human",
      size: "0",
      space: "5",
      reachTall: "5",
      reachLength: "5",
      class: "Fighter",
      level: 4,

      abilityScores: [
          {
            name: "STR",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,

          },{
            name: "DEX",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,
          },{
            name: "CON",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,
          },{
            name: "INT",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,
          },{
            name: "WIS",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,
          },{
            name: "CHA",
            total: 11,
            base: 11,
            lvlUp: 0,
            raceEnh: 0,
            permEnh: 0,
            permMod: 0,
            itemEnh: 0,
            tempEnh: 0,
            tempMod: 0,
          }
      ]

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.updateAbilityScoreByNameAndType = this.updateAbilityScoreByNameAndType.bind(this);
    this.updateRaceAbilityScore = this.updateRaceAbilityScore.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  updateRaceAbilityScore(race)
  {
    switch (race) {
      case "Human":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", 0);
        break;
      case "Dwarve":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 2);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", -2);
        break;
      case "Elf":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 2);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", -2);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", 0);

        break;
      case "Gnome":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", -2);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 2);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", 0);
        break;
      case "Half-Elf":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", 0);
        break;
      case "Half-Orc":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", 2);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", -2);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", -2);
        break;
      case "Halfling":
        this.updateAbilityScoreByNameAndType("STR", "raceEnh", -2);
        this.updateAbilityScoreByNameAndType("DEX", "raceEnh", 2);
        this.updateAbilityScoreByNameAndType("CON", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("INT", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("WIS", "raceEnh", 0);
        this.updateAbilityScoreByNameAndType("CHA", "raceEnh", 0);
        break;
      default:
        break;
    }
  }

  updateAbilityScoreTotal(ability)
  {

    console.log("UPDATE SCORE TOTAL: ", ability);

    let copied = [...this.state.abilityScores];

    if(ability === "def")
    {
      //loop through the entire array to refresh all
    }
    else
    {
      let index = copied.findIndex(el => el.name === ability);
      console.log("UPDATE SCORE TOTAL INDEX: ", index);
      let base = copied[index].base;
      let permEnh = copied[index].permEnh;
      let lvlUp = copied[index].lvlUp;
      let raceEnh = copied[index].raceEnh;
      let itemEnh = copied[index].itemEnh;
      let tempEnh = copied[index].tempEnh;


      let total = base + permEnh + lvlUp + raceEnh + itemEnh + tempEnh;
      let permMod = Math.floor(((base + permEnh + raceEnh + lvlUp) - 10) / 2);
      let tempMod = Math.floor((total - 10)/2);

      copied[index].total = total;
      copied[index].permMod = permMod;
      copied[index].tempMod = tempMod;
      this.setState({ abilityScores: copied });
    }
  }

  updateAbilityScoreByNameAndType(ability, type, value)
  {
    /*
    let abiScores = [... this.state.abilityScores];
    let index = abiScores.findIndex(el => el.name === ability);
    abiScores[index] = {...abiScores[index].permEnh, key: value};
    this.setState({abilityScores: abiScores});
    console.log(abiScores);
    console.log(this.state.abilityScores);
    */

    //console.log(ability);
    //console.log(type);
    //console.log(value);

    let copied = [...this.state.abilityScores];
    let index = copied.findIndex(el => el.name === ability);
    //(copied[index].permEnh as any).value = value;


    copied[index][type] = value;
    //console.log(copied[index][type]);

    //console.log("copied post: ", copied);
    this.setState({ abilityScores: copied });
    //console.log("abilityScores POSTCALL: ",this.state.abilityScores);

    this.updateAbilityScoreTotal(ability);
  }

  handleRace(evt)
  {
    console.log("HANDLE RACE:", evt.target.value);

    this.setState({race: evt.target.value});
    switch (evt.target.value) {
      case "Human":
        this.handleSize("0");
        this.updateRaceAbilityScore("Human");
        break;
      case "Dwarve":
        this.handleSize("0");
        this.updateRaceAbilityScore("Dwarve");
        break;
      case "Elf":
        this.handleSize("0");
        this.updateRaceAbilityScore("Elf");
        break;
      case "Gnome":
        this.handleSize("-1");
        this.updateRaceAbilityScore("Gnome");
        break;
      case "Half-Elf":
        this.handleSize("0");
        this.updateRaceAbilityScore("Half-Elf");
        break;
      case "Half-Orc":
        this.handleSize("0");
        this.updateRaceAbilityScore("Half-Orc");
        break;
      case "Halfling":
        this.handleSize("-1");
        this.updateRaceAbilityScore("Halfling");
        break;
      default:
        break;
    }
  }

  handleSize(newSize)
  {
    this.setState({size: newSize});

    switch (newSize)
    {
      case "-4":
        this.setState({space: ".5"});
        this.setState({reachTall: "0"});
        this.setState({reachLength: "0"});
        break;
      case "-3":
        this.setState({space: "1"});
        this.setState({reachTall: "0"});
        this.setState({reachLength: "0"});
        break;
      case "-2":
        this.setState({space: "2.5"});
        this.setState({reachTall: "0"});
        this.setState({reachLength: "0"});
        break;
      case "-1":
        this.setState({space: "5"});
        this.setState({reachTall: "5"});
        this.setState({reachLength: "5"});
        break;
      case "0":
        this.setState({space: "5"});
        this.setState({reachTall: "5"});
        this.setState({reachLength: "5"});
        break;
      case "1":
        this.setState({space: "10"});
        this.setState({reachTall: "10"});
        this.setState({reachLength: "5"});
        break;
      case "2":
        this.setState({space: "15"});
        this.setState({reachTall: "15"});
        this.setState({reachLength: "10"});
        break;
      case "3":
        this.setState({space: "20"});
        this.setState({reachTall: "20"});
        this.setState({reachLength: "15"});
        break;
      case "4":
        this.setState({space: "30"});
        this.setState({reachTall: "30"});
        this.setState({reachLength: "20"});
        break;
      default:
        break;
    }
  }

  render()
  {return (
      <div>
        <div className='Row'>
        <PlayerInfo />
        <RaceSelect race={this.state.race} handleRace={this.handleRace}/>
        <SizeSpace
          size={this.state.size} space={this.state.space}
          reachTall={this.state.reachTall} reachLength={this.state.reachLength} handleSize={this.handleSize}
        />
        </div>
        <ClassSelect class={this.state.class} level={this.state.level}/>
        <AbilityScores abilityScores={this.state.abilityScores}/>
        <WeaponSelect size={this.state.size} abilityScores={this.state.abilityScores} race={this.state.race}/>

        <label>BLOCK</label>

        <SkillTable race={this.state.race} size={this.state.size} level={this.state.level} class={this.state.class} abilityScores={this.state.abilityScores}/>

      </div>
    );
  }
}

export default CharacterPage;
