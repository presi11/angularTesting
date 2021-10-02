import { Component, OnInit } from '@angular/core';
import { RomanService } from '../roman.service';


@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {

  convertNumber: number = 0;
  romanNumber:String ='';  
  constructor(private romanService:RomanService){

  }

  ngOnInit(): void {

    
  }

  
  convert(convertNumber:number = 0){
    this.romanNumber =this.romanService.converToRoman(convertNumber);
  }

}
