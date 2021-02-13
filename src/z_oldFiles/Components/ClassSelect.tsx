import * as React from 'react';
import '@styles/char_components/nameFields.css'
//import CSS

class ClassSelect extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    /*
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    */
  }


  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }


  render() {
    return (
      <form>
        <label>
          Class:
        </label>
        <select value={this.props.class} onChange={this.props.handleClass}>
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Wizard">Wizard</option>
        </select>

        <label>
          Level:
          <input type="number" className="NameInputs" value={this.props.level} onChange={this.handleChange} />
        </label>

      </form>
    );
  }
}

export default ClassSelect;
