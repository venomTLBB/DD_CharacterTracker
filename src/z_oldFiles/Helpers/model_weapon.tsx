import * as React from 'react';


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

export default Model_Weapon;
