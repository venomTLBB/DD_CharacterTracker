import * as React from 'react';
import '@styles/char_components/nameFields.css'

class PlayerInfo extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    this.state = {
      playerName: 'Dyan',
      campaignName: 'Tyler Game',
      characterName: 'Wikus'
    };
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange (evt) {

    this.setState({ [evt.target.name]: evt.target.value });
    console.log(evt.target.name, evt.target.value)
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
  }

  render() {
    return (
      <form>

        <label>
          Player:
          <input type="text" className="NameInputs" name="playerName" value={this.state.playerName} onChange={this.handleChange} />
        </label>

        <label>
          Campaign:
          <input type="text" className="NameInputs" name="campaignName" value={this.state.campaignName} onChange={this.handleChange} />
        </label>

        <label>
          Character:
          <input type="text" className="NameInputs" name="characterName" value={this.state.characterName} onChange={this.handleChange} />
        </label>

      </form>
    );
  }
}

export default PlayerInfo;
