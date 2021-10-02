import { TestBed } from '@angular/core/testing';

import { RomanService } from './roman.service';


describe('RomanService', () => {
  let service: RomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Numero del 1,4,5 y 6', () => {
    expect(service.converToRoman(1)).toEqual("I");
    expect(service.converToRoman(4)).toEqual("IV");
    expect(service.converToRoman(5)).toEqual("V");
    expect(service.converToRoman(6)).toEqual("VI");
    expect(service.converToRoman(9)).toEqual("IX");
    expect(service.converToRoman(10)).toEqual("X");
    expect(service.converToRoman(11)).toEqual("XI");
    expect(service.converToRoman(39)).toEqual("XXXIX");
    expect(service.converToRoman(40)).toEqual("XL");
    expect(service.converToRoman(41)).toEqual("XLI");
    expect(service.converToRoman(49)).toEqual("XLIX");
    expect(service.converToRoman(50)).toEqual("L");
    expect(service.converToRoman(51)).toEqual("LI");
    expect(service.converToRoman(89)).toEqual("LXXXIX");
    expect(service.converToRoman(90)).toEqual("XC");
    expect(service.converToRoman(91)).toEqual("XCI");
    expect(service.converToRoman(99)).toEqual("XCIX");
    expect(service.converToRoman(100)).toEqual("C");
    expect(service.converToRoman(101)).toEqual("CI");



  });
  it('Numero del 9,10 y 11', () => {
    expect(service.converToRoman(9)).toEqual("IX");
    expect(service.converToRoman(10)).toEqual("X");
    expect(service.converToRoman(11)).toEqual("XI");
  });

  it('Numero del 39,40 y 41', () => {

    expect(service.converToRoman(39)).toEqual("XXXIX");
    expect(service.converToRoman(40)).toEqual("XL");
    expect(service.converToRoman(41)).toEqual("XLI");

  
  });

  it('Numero del 49,50 y 51', () => {
    expect(service.converToRoman(49)).toEqual("XLIX");
    expect(service.converToRoman(50)).toEqual("L");
    expect(service.converToRoman(51)).toEqual("LI");
  });

  it('Numero del 89,90 y 91', () => {
    expect(service.converToRoman(89)).toEqual("LXXXIX");
    expect(service.converToRoman(90)).toEqual("XC");
    expect(service.converToRoman(91)).toEqual("XCI");
  });

  it('Numero del 99,100 y 101', () => {

    expect(service.converToRoman(99)).toEqual("XCIX");
    expect(service.converToRoman(100)).toEqual("C");
    expect(service.converToRoman(101)).toEqual("CI");

  });

  it('Numero del 399,400 y 401', () => {

    expect(service.converToRoman(399)).toEqual("CCCXCIX");
    expect(service.converToRoman(400)).toEqual("CD");
    expect(service.converToRoman(401)).toEqual("CDI");

  });

  it('Numero del 499,500 y 501', () => {

    expect(service.converToRoman(499)).toEqual("CDXCIX");
    expect(service.converToRoman(500)).toEqual("D");
    expect(service.converToRoman(501)).toEqual("DI");

  });

  
  it('Numero del 899,900 y 901', () => {                                        

    expect(service.converToRoman(899)).toEqual("DCCCXCIX");
    expect(service.converToRoman(900)).toEqual("CM");
    expect(service.converToRoman(901)).toEqual("CMI");

  });

  it('Numero del 999,1000', () => {
    expect(service.converToRoman(999)).toEqual("CMXCIX");
    expect(service.converToRoman(1000)).toEqual("M");
  });
});
