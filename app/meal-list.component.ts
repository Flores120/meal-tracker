import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let meal of childMealList">
    <h2>{{ meal.name }}</h2>
    <button (click)="editClicked(meal)">Edit</button>
    </div>

  `

})

export class MealListComponent {
  @Input() childMealList: Meal[];
      @Output() clickSender = new EventEmitter();
      editClicked(mealsEdit: Meal) {
        this.clickSender.emit(mealsEdit);
      }
    }
