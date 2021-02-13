import * as React from 'react';
//import CSS


class SizeSpace extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    /*
    this.state = {
      size: "0",
      space: "5",
      reachTall: "5",
      reachLength: "5"
    };
    */

    //this.handleChange = this.handleChange.bind(this);
  }
  /*
  handleUpdate(newSize)
  {
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
  */

  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax

    /*
    if(evt.target.name == "size")
    {
      this.handleUpdate(evt.target.value);
    }
    */

    this.setState({ [evt.target.name]: evt.target.value });

    //var testVal = (document.getElementById("spaceID") as HTMLInputElement).value;
    //console.log(testVal);

    //(document.getElementById("spaceID") as HTMLInputElement).value = "30";
    //console.log(testVal);



    //this.setState({reachTall: "30"});
  }

  render() {
    return (
      <form>

        <label>
          Size:
        </label>
        <select name="size" id="sizeID" value={this.props.size} onChange={this.props.handleSize}>
          <option value="-4">Fine</option>
          <option value="-3">Diminutive</option>
          <option value="-2">Tiny</option>
          <option value="-1">Small</option>
          <option value="0">Medium</option>
          <option value="1">Large</option>
          <option value="2">Huge</option>
          <option value="3">Gargantuan</option>
          <option value="4">Colossal</option>
        </select>

        <label>
          Space:
        </label>
        <select name="space" id="spaceID" value={this.props.space} onChange={this.handleChange}>
          <option value=".5">.5ft</option>
          <option value="1">1ft</option>
          <option value="2.5">2.5ft</option>
          <option value="5">5ft</option>
          <option value="10">10ft</option>
          <option value="15">15ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
        </select>

        <label>
          Reach: Tall
        </label>
        <select name="reachTall" id="reachTallID" value={this.props.reachTall} onChange={this.handleChange}>
          <option value="0">0ft</option>
          <option value="5">5ft</option>
          <option value="10">10ft</option>
          <option value="15">15ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
        </select>

        <label>
          Length:
        </label>
        <select name="reachLength" id="reachLengthID" value={this.props.reachLength} onChange={this.handleChange}>
          <option value="0">0ft</option>
          <option value="5">5ft</option>
          <option value="10">10ft</option>
          <option value="15">15ft</option>
          <option value="20">20ft</option>
        </select>

      </form>
    );
  }
}

export default SizeSpace;
