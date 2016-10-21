import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Track your every meal</h1>
  <div class="meal" (click)="showMeal()" *ngFor="let meal of meals">
  <h2>{{ meal.name }}</h2>
  <h2>{{ meal.details }}</h2>
  <h2>{{ meal.calories }} calories</h2>
  </div>
  <div>
  <label>Enter Meal</label>
  <input [(ngModel)]="selectedmeal.name">
  <label>Enter Details</label>
  <input [(ngModel)]="selectedmeal.details">
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Burger", "ate half of it", 145),
    new Meal("Salad", "with no dressing", 100),
  ];

  selectedmeal: Meal = this.meals[0];
  showMeal(clickedMeal: Meal){
    this.selectedmeal = clickedMeal;
    console.log(this.selectedmeal);
  }
}






export class Meal {
  public done: boolean = false;
  constructor(public name: string, public details: string, public calories: number){ }
}
