import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
    <h1>Track your every meal</h1>
  </div>
  <div class="container">
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
    new Meal("Pizza", "ate 5 slice", 640),
    new Meal("Burger", "only ate half", 342),
    new Meal("Hot Dog", "just the bun", 100),
    new Meal("Big Mac", "didnt put any pickes", 533),
    new Meal("Chipotle", "steak burrito", 600),
    new Meal("Tuna Sandwitch", "No mayo", 355),
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
