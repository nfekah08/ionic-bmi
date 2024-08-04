import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 height:number = 170
 weight:number = 70 
 bmi:number = 0
 message:string = ""

  constructor() {}

calculateBmi(){
  this.bmi = Math.round(this.weight / Math.pow(this.height / 100,2))

  if(this.bmi < 18.5){
    this.message = "You are underweight"

  }
  else if(this.bmi <25){
    this.message = "You are normal"

  }
  else if(this.bmi < 30){
    this.message = "You are overweight"

  }
  else if(this.bmi <35){
    this.message = "You are obese"

  }
  else {
    this.message = "You are extremely obese"
  }

  }


  
}


