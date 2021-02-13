import * as React from 'react';
//import CSS

class RaceSelect extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    /*
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    */
  }

  /*
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }
  */

  render() {
    return (
      <form>
        <label>
          Race:
        </label>
        <select value={this.props.race} onChange={this.props.handleRace}>
          <option value="Human">Human</option>
          <option value="Dwarve">Dwarve</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Halfling">Halfling</option>
        </select>
      </form>
    );
  }
}

export default RaceSelect;
