import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Track your every meal</h1>
  <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showMeal($event)">
  </meal-list>
  <edit-meal
      [childSelectedMeal]="selectedmeal"
      (doneClickedSender)="hideMeal()">
  </edit-meal>
  <new-meal
  (newMealAdd)="addMeal($event)"
  ></new-meal>
  </div>

`
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Burger", "only ate half", 342),
    new Meal("Hot Dog", "just the bun", 100),
    new Meal("Salad", "didnt put any pickes", 455)
  ];
  selectedmeal: Meal = null;
  showMeal(clickedMeal: Meal) {
    this.selectedmeal = clickedMeal;
  }
  hideMeal(){
    this.selectedmeal = null;
  }
  addMeal(newMeal: Meal){
    this.masterMealList.push(newMeal);
  }
  }
