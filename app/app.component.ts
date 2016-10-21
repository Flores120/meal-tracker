import { Component } from '@angular/core';
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
    (doneClickedSender)="hideMeal()"
  ></edit-meal>
`
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Burger", "only ate half", 342),
    new Meal("Burger", "only ate half", 342)
  ];
    selectedmeal: Meal = null;
    showMeal(clickedMeal: Meal){
      this.selectedmeal = clickedMeal;
    }
    hideMeal(){
      this.selectedmeal = null;
    }
  }
