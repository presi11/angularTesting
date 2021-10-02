import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})



export class RomanService {

  roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  

  converToRoman(num: number):any {

    if(num < 1){ return "";}
    if(num >= 1000){ return "M" + this.converToRoman(num - 1000);}
    if(num >= 900){ return "CM" + this.converToRoman(num - 900);}
    if(num >= 500){ return "D" + this.converToRoman(num - 500);}
    if(num >= 400){ return "CD" + this.converToRoman(num - 400);}
    if(num >= 100){ return "C" + this.converToRoman(num - 100);}
    if(num >= 90){ return "XC" + this.converToRoman(num - 90);}
    if(num >= 50){ return "L" + this.converToRoman(num - 50);}
    if(num >= 40){ return "XL" + this.converToRoman(num - 40);}
    if(num >= 10){ return "X" + this.converToRoman(num - 10);}
    if(num >= 9){ return "IX" + this.converToRoman(num - 9);}
    if(num >= 5){ return "V" + this.converToRoman(num - 5);}
    if(num >= 4){ return "IV" + this.converToRoman(num - 4);}
    if(num >= 1){ return "I" + this.converToRoman(num - 1);}
  }

  constructor() {}
}
