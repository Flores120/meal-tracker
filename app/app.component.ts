import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Track your every meal</h1>
  <div *ngFor="let meal of meals">
  <div class="meal">
  <h2>{{ meal.name }}</h2>
  <h2>{{ meal.details }}</h2>
  <h2>{{ meal.calories }} calories</h2>
  <button (click)="showMeal(meal)">Edit Meal</button>
  </div>

  <div *ngIf="selectedmeal">
  <label>Enter Meal</label>
  <input [(ngModel)]="selectedmeal.name">
  <label>Enter Calories</label>
  <input type="number" [(ngModel)]="selectedmeal.calories">
  <label>Enter Details</label>
  <input [(ngModel)]="selectedmeal.details">
  <button (click)="hideMeal()">Done</button>
  </div>
  </div>

  `
})

export class AppComponent {
  meals: Meal[] = [
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






export class Meal {
  public done: boolean = false;
  constructor(public name: string, public details: string, public calories: number){ }
}
