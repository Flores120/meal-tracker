import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Track your every meal</h1>
  <div class="meal" *ngFor="let meal of meals">
  <h2>{{ meal.name }}</h2>
  <h2>{{ meal.details }}</h2>
  <h2>{{ meal.calories }} calories</h2>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Burger", "ate half of it", 145),
  ];
}
export class Meal {
  constructor(public name: string, public details: string, public calories: number){ }
}
