import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentNumber: number = 0;
  displayNumber: string = "0";
  previousNumber: number = 0;
  numFlag: boolean = false;
  calcFlag: boolean = false;
  plus: boolean = false;
  minus: boolean = false;
  multi: boolean = false;
  constructor() { }


  add() {
    if (this.calcFlag) {

      this.currentNumber = this.currentNumber + this.previousNumber;
      this.previousNumber = this.currentNumber;
      this.displayNumber = this.currentNumber + '';
      this.calcFlag = false;
      this.numFlag = false;
    }
    this.plus = true;
    this.minus = false;
    this.multi = false;
  }

  sub() {
    if (this.calcFlag) {

      this.currentNumber = this.currentNumber - this.previousNumber;
      this.previousNumber = this.currentNumber;
      this.displayNumber = this.currentNumber + '';
      this.calcFlag = false;
      this.numFlag = false;
    }
    this.plus = false;
    this.minus = true;
    this.multi = false;

  }
  mul() {
    if (this.calcFlag) {

      this.currentNumber = this.currentNumber * this.previousNumber;
      this.previousNumber = this.currentNumber;
      this.displayNumber = this.currentNumber + '';
      this.calcFlag = false;
      this.numFlag = false;
    }
    this.plus = false;
    this.minus = false;
    this.multi = true;

  }

  num(num: any) {
    if (this.numFlag) {

      this.currentNumber = Number(this.currentNumber + '' + num);
      this.displayNumber = this.currentNumber + '';
    } else {
      this.currentNumber = Number(num);
      this.displayNumber = this.currentNumber + '';
    }
    this.calcFlag = true;
    this.numFlag = true;
  }
  del() {

  }
  reset() {
    this.currentNumber = 0;
    this.previousNumber = 0;
    this.displayNumber = "";
  }

  equals() {
    if (this.plus) {
      this.currentNumber = this.currentNumber + this.previousNumber;
      this.displayNumber = this.currentNumber + '';
    } else if (this.minus) {
      this.currentNumber = this.currentNumber - this.previousNumber;
      this.displayNumber = this.currentNumber + '';
    } else if (this.multi) {
      this.currentNumber = this.currentNumber * this.previousNumber;
      this.displayNumber = this.currentNumber + '';
    }
    this.calcFlag = false;
    this.numFlag = true;

    this.plus = false;
    this.minus = false;
    this.multi = false;
  }

}
