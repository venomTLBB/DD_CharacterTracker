import * as React from 'react';
//import {Model_Weapon} from 'src/modifier_helpers/weapon_helper';
//import CSS

class WeaponSelect extends React.Component<any,any>
{
  constructor(props: any) {
    super(props);
    this.state = {
      weaponName: "Gauntlet",
      weaponType: "",
      weaponDMG: "",
      weaponCrit: "",
      weaponList:
      [
        new Model_Weapon("Gauntlet", "Simple", "Unarmed" ,"1d2", "1d3", "2", "0"),
        new Model_Weapon("Dagger", "Simple", "Light-Melee" ,"1d3", "1d4", "3", "0"),
        new Model_Weapon("Club", "Simple", "One-Handed-Melee" ,"1d4", "1d6", "2", "0"),
        new Model_Weapon("Shortspear", "Simple", "One-Handed-Melee" ,"1d4", "1d6", "2", "0"),
        new Model_Weapon("Spear", "Simple", "Two-Handed-Melee" ,"1d6", "1d8", "3", "0"),
        new Model_Weapon("Crossbow-Heavy", "Simple", "Ranged" ,"1d8", "1d10", "2", "0"),
        new Model_Weapon("Handaxe", "Martial", "Light-Melee" ,"1d4", "1d6", "3", "0"),
        new Model_Weapon("Gauntlet", "Simple", "Unarmed" ,"1d2", "1d3", "2", "0")
      ]
    };
    this.handleWeaponType = this.handleWeaponType.bind(this);
  }




  weaponList()
  {
    let array : Model_Weapon[] = [];

    let weapon1 = new Model_Weapon("Gauntlet", "Simple", "Unarmed" ,"1d2", "1d3", "2", "0");
    let weapon2 = new Model_Weapon("Dagger", "Simple", "Light-Melee" ,"1d3", "1d4", "3", "0");
    let weapon3 = new Model_Weapon("Club", "Simple", "One-Handed-Melee" ,"1d4", "1d6", "2", "0");
    let weapon4 = new Model_Weapon("Shortspear", "Simple", "One-Handed-Melee" ,"1d4", "1d6", "2", "0");
    let weapon5 = new Model_Weapon("Spear", "Simple", "Two-Handed-Melee" ,"1d6", "1d8", "3", "0");
    let weapon6 = new Model_Weapon("Crossbow-Heavy", "Simple", "Ranged" ,"1d8", "1d10", "2", "0");
    let weapon7 = new Model_Weapon("Handaxe", "Martial", "Light-Melee" ,"1d4", "1d6", "3", "0");
    let weapon8 = new Model_Weapon("Gauntlet", "Simple", "Unarmed" ,"1d2", "1d3", "2", "0");

    array.push(weapon1);
    array.push(weapon2);
    array.push(weapon3);
    array.push(weapon4);
    array.push(weapon5);
    array.push(weapon6);
    array.push(weapon7);
    array.push(weapon8);

    /*
    let items = [];
    for (let i = 0; i <= this.props.maxValue; i++)
      {
        items.push(<option key={i} value={i}>{i}</option>);
          //here I will be creating my options dynamically based on
          //what props are currently passed to the parent component
      }
    return items;
    */
    return array;
  }


  handleWeaponType (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    //console.log(evt.target.value);

    let weaponDMG = "";
    let strMod = this.props.abilityScores[0].tempMod;
    let copied = [...this.state.weaponList];
    let index = copied.findIndex(el => el.name === evt.target.value);

    this.setState({weaponName: evt.target.value});

    if(this.props.size === "0")
    {
      weaponDMG = copied[index].mDMG;

    }
    else if(this.props.size === "-1")
    {
      weaponDMG = copied[index].sDMG;
    }
    else
    {

    }
    weaponDMG = weaponDMG + " + " + strMod;
    this.setState({weaponDMG: weaponDMG})
    this.setState({weaponCrit: copied[index].crit});
    //this.setState({ [evt.target.name]: evt.target.value });
  }

  handleWeaponDamage()
  {
        let weaponDMG = "";
        let strMod = this.props.abilityScores[0].tempMod;
        let copied = [...this.state.weaponList];
        let index = copied.findIndex(el => el.name === this.state.weaponName);

        if(this.props.size === "0")
        {
          weaponDMG = copied[index].mDMG;

        }
        else if(this.props.size === "-1")
        {
          weaponDMG = copied[index].sDMG;
        }
        else
        {

        }
        weaponDMG = weaponDMG + " + " + strMod;
        this.setState({weaponDMG: weaponDMG})
        this.setState({weaponCrit: copied[index].crit});
        //this.setState({ [evt.target.name]: evt.target.value });
  }

  componentDidUpdate(prevProps) {
  if (prevProps.size !== this.props.size)
  {
    console.log("SIZE CHANGE: ", this.props.size);
    this.handleWeaponDamage();
  }
}


  render()
  {
    const weapons = this.state.weaponList;

    let weaponsList = weapons.length > 0 && weapons.map((item, i) =>
    {
      return (<option key={i} value={item.name}>{item.name}</option>)
    }, this);


    return (
      <form>
        <label>
          Weapon:
        </label>

          <select value={this.state.weaponName} onChange={this.handleWeaponType}>
            {weaponsList}
          </select>

          <label> Damage: </label>
          <input type="text" value= {this.state.weaponDMG}/>

          <label> Crit: </label>
          <input type="text" value= {this.state.weaponCrit}/>

      </form>
    );
  }
}

class Model_Weapon
{
  name: string;
  type: string;
  group: string;
  sDMG: string;
  mDMG: string;
  crit: string;
  range: string;

  constructor(name: string, type: string, group: string, sDMG: string, mDMG: string, crit: string, range:string) {
    this.name = name;
    this.type = type;
    this.group = group;
    this.sDMG = sDMG;
    this.mDMG = mDMG;
    this.crit = crit;
    this.range = range;
  }
}

export default WeaponSelect;
