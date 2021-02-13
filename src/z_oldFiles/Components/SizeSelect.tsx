import * as React from 'react';
//import CSS

class SizeSelect extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
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
          Size:
        </label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Fine">Fine</option>
          <option value="Diminutive">Diminutive</option>
          <option value="Tiny">Tiny</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Huge">Huge</option>
          <option value="Gargantuan">Gargantuan</option>
          <option value="Colossal">Colossal</option>
        </select>
      </form>
    );
  }
}

export default SizeSelect;
