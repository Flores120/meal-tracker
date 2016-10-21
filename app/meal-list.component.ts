import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let meal of meals">
  <h2>{{ meal.name }}</h2>
  <button (click)="showMeal(meal)">Edit<button>
  </div>

  `
})

export class MealListComponent {
    public meals: Meal[] = [
    new Meal("Burger", "ate half of it", 145),
    new Meal("Salad", "with no dressing", 100),
  ];

  selectedmeal: Meal = null;
  showMeal(clickedMeal: Meal){
    this.selectedmeal = clickedMeal;
  }
  hideMeal(){
    this.selectedmeal = null;
  }
}
