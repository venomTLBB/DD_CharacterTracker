import * as React from 'react';
import { RouteComponentProps } from 'react-router';



export default class View_CharInfo extends React.Component{
  render() {
      const {
          charName,
          charClass,
          charLevel,
          charRace,
          charSize,
          changeRace
      } = this.props

      return (
          <React.Fragment>
            <div>
                <h3>CHAR VIEW</h3>
                <label>
                  Player:
                  <input type="text" className="NameInputs" name="playerName" value={charName} onChange={changeRace}/>
                </label>

                <label>
                  Race:
                </label>
                <select>
                  <option value="Human">Human</option>
                  <option value="Dwarve">Dwarve</option>
                  <option value="Elf">Elf</option>
                  <option value="Gnome">Gnome</option>
                  <option value="Half-Elf">Half-Elf</option>
                  <option value="Half-Orc">Half-Orc</option>
                  <option value="Halfling">Halfling</option>
                </select>
            </div>
            <div>
                <label>
                  Class:
                  <input type="text" className="NameInputs" name="playerName" value={this.props.charClass}/>
                </label>

                <label>
                  Level:
                  <input type="number" className="NameInputs" name="campaignName" value={this.props.charLevel}/>
                </label>

                <label>
                  Size:
                  <input type="text" className="NameInputs" name="characterName" value={this.props.charSize}/>
                </label>
            </div>
            <div>

            </div>
          </React.Fragment>
      )
  }
}
