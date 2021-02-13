import SizeTable from '../../core/ruleTables/sizeTable.json'
export default class Helper_SizeDef{

  sizeDef: any;
  size: string;

  constructor(size: string){
    this.sizeDef = (<any>SizeTable);
    console.log(this.sizeDef);
    this.size = size;
  }

  getSizeInfo(size: string){
    return this.sizeDef.[size];
  }

  getAttackAC(size: string){
    return this.sizeDef.[size].atkAC;
  }

  getSpecialAtk(size: string){
    return this.sizeDef.[size].specialAtk;
  }

  getHide(size: string){
    return this.sizeDef.[size].hide;
  }

  getSpace(size: string){
    return this.sizeDef.[size].space;
  }

  getReach(size: string){
    return this.sizeDef.[size].reach;
  }
}
