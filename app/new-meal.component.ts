import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="newMeal">
    <h2> Enter New Meal</h2>
    <label>Enter Meal</label>
    <input #newName>
    <label>Enter Calories</label>
    <input type="number" #newCalories>
    <label>Enter Details</label>
    <input #newDetails>
    <button (click)="
      addMeal(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add Meal
    </button>
  </div>
  `
})

export class NewMealComponent {
@Output() newMealAdd = new EventEmitter();
addMeal(name:string, details: string, calories: number) {
  var newMeal: Meal = new Meal(name, details, calories);
  this.newMealAdd.emit(newMeal);
  }
}
