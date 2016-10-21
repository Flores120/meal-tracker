import { Component } from '@angular/core';
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
    <button>Add Meal</button>
    </div>
  `
})

export class NewMealComponent {

}
