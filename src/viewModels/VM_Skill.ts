

export default class VM_Skill {

  skillName: string;
  skillTotal: number;
  abilityType: string;
  abilityMod: number;
  rank: number;
  feats: number;
  misc: number;
  synergy: number;
  cost: number;
  untrained: boolean;
  classSkill: boolean;

  constructor(name: string, abilityType: string, abilityMod: number, rank: number, feats: number,
    misc: number, synergy: number, untrained: boolean, classSkill: boolean){
      this.skillName = name;
      this.abilityType = abilityType;
      this.abilityMod = abilityMod;
      this.rank = rank;
      this.feats = feats;
      this.misc = misc;
      this.synergy = synergy;
      this.untrained = untrained;
      this.classSkill = classSkill;

      this.calcSkillTotal();
      this.calcCost();
  }

  calcSkillTotal(){
    if(this.untrained == false && this.rank == 0){
      this.skillTotal = 0;
    }
    else{
      this.skillTotal = +this.rank + +this.abilityMod + +this.feats + +this.misc +this.synergy;
    }
  }

  calcCost(){
    if(this.classSkill == false){
      this.cost = this.rank *2;
    }
    else{
      this.cost = this.rank;
    }
  }
}
