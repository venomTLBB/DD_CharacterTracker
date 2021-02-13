import * as React from 'react';
//import CSS

class AbilityScores extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    this.state =
    {

    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    console.log(evt.target.name);
    console.log(evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ability</th>
              <th>Total</th>
              <th>Base</th>
              <th>PermEnh</th>
              <th>Level Up</th>
              <th>RaceEnh</th>
              <th>PermMod</th>
              <th>ItemEnh</th>
              <th>TempEnh</th>
              <th>TempMod</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td> <input type="text" value= {this.props.abilityScores[0].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].total} onChange={this.handleChange}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[0].tempMod}/> </td>


            </tr>

            <tr>
              <td> <input type="text" value= {this.props.abilityScores[1].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].total}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[1].tempMod}/> </td>
            </tr>

            <tr>
              <td> <input type="text" value= {this.props.abilityScores[2].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].total}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[2].tempMod}/> </td>
            </tr>

            <tr>
              <td> <input type="text" value= {this.props.abilityScores[3].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].total}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[3].tempMod}/> </td>
            </tr>

            <tr>
              <td> <input type="text" value= {this.props.abilityScores[4].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].total}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[4].tempMod}/> </td>
            </tr>

            <tr>
              <td> <input type="text" value= {this.props.abilityScores[5].name}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].total}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].base}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].permEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].lvlUp}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].raceEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].permMod}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].itemEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].tempEnh}/> </td>
              <td> <input type="number" value= {this.props.abilityScores[5].tempMod}/> </td>
            </tr>
          </tbody>

        </table>
        </div>
    );
  }
}

export default AbilityScores;
