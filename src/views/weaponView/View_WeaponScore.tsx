import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class View_WeaponScore extends React.Component{

  constructor(props: any){
    super(props);
    this.state =
    {

      //weapon list props?
      filter: "",

      weaponList: [],


      weaponName: "Default",
      damage: "1D6-Default",
      attackBonus:{
        firstAtk: 1,
        secondAtk: 2,
        thirdAtk: 3,
        fourthAtk: 4
      },
      attackMod: -9,
      damageMod: -9,
      attackType: "M",
      critRange: 21,
      critMult: 5,
      equiped: "X",
      rangeInc: 0

    };

    this.changeStateValue = this.changeStateValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    console.log(this.props.weaponList.simpleWeapons[0]);

    var testArray = [];

    this.props.weaponList.simpleWeapons.forEach(element => {
      //console.log("HELLO", element)
      testArray.push(element.weapon.name);
    });

    console.log(testArray);

    this.setState({weaponList: testArray});

  }

  handleChange = event => {
   this.setState({ filter: event.target.value });
   //console.log(this.state.filter);
   //console.log(this.state.weaponList);
 };

  changeStateValue(evt){

    console.log(evt.target.value);
/*
    {['name'].map(key => (
      <select key={key} style={{width: "150px"}}> {this.props.weaponList.simpleWeapons.map(({ [key]: value }) => <option key={value}>{value}</option>)}
      </select>
    ))}
    */


    /*


          {['name'].map(key => (
            <select key={key} style={{width: "150px"}} onChange={this.changeStateValue} name="change" > {this.props.weaponList.simpleWeapons.map(({ [key]: value }) => <option key={value}>{value}</option>)}
            </select>
          ))}
*/


/*

const { filter, weaponList } = this.state;
//const { data } = this.props.weaponList.simpleWeapons;
const lowercasedFilter = filter.toLowerCase();
//console.log("LOADING LIST: ", weaponList);
const filteredData = weaponList.filter(item => {
  return Object.keys(item).some(key =>
    item[key].toLowerCase().includes(lowercasedFilter)
  );
});


      <input value={filter} onChange={this.handleChange} />
       {filteredData.map(item => (
         <div key={item.name}>
           <div>
             {item.name}
           </div>
         </div>
       ))}


       */
  }

  render() {

    let weaponList = this.props.weaponList.simpleWeapons;
    let optionItems = weaponList.map((weapon) =>
        <option key={weapon.name}>{weapon.name}</option>);


    return (
      <div>

        <select style={{width: "150px"}} >
          {optionItems}
        </select>

        <input type="text" className="NameInputs" name="" style={{width: "150px"}} value={this.state.damage}/>
        <input type="number" className="NameInputs" name="baseScore" style={{width: "40px"}} value={this.state.attackBonus.firstAtk}/>
        <input type="number" className="NameInputs" name="baseScore" style={{width: "40px"}} value={this.state.attackBonus.secondAtk}/>
        <input type="number" className="NameInputs" name="baseScore" style={{width: "40px"}} value={this.state.attackBonus.thirdAtk}/>
        <input type="number" className="NameInputs" name="baseScore" style={{width: "40px"}} value={this.state.attackBonus.fourthAtk}/>
        <input type="number" className="NameInputs" name="" style={{width: "60px"}} value={this.state.attackMod}/>
        <input type="number" className="NameInputs" name="levelUpScore" style={{width: "60px"}} value={this.state.damageMod}/>
        <input type="text" className="NameInputs" name="" style={{width: "60px"}} value={this.state.attackType}/>
        <input type="number" className="NameInputs" name="" style={{width: "60px"}} value={this.state.critRange}/>
        <input type="number" className="NameInputs" name="" style={{width: "60px"}} value={this.state.critMult}/>
        <input type="text" className="NameInputs" name="spellScore" style={{width: "60px"}} value={this.state.equiped}/>
        <input type="number" className="NameInputs" name="miscScore" style={{width: "60px"}} value={this.state.rangeInc}/>
      </div>
    )
  }
}
