import { Component } from '@angular/core';
import { Meal } from './meal';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Track your every meal</h1>
  <meal-list></meal-list>
  </div>

  `
})

export class AppComponent {

}
