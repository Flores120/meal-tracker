import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All Meals</option>
    <option value="under500">Under 500 Calories</option>
    <option value="over500">Over 500 Calories</option>
  </select>
  <div *ngFor="let meal of childMealList | mealpipe:selectedCalCount">
    <h2>{{ meal.name }}</h2>
    <h2>{{ meal.calories}}</h2>
    <h4>{{ meal.details}}</h4>
    <button (click)="editClicked(meal)">Edit</button>
  </div>

  `

})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalCount: string = "all";
  onChange(optionFromMenu){
    this.selectedCalCount = optionFromMenu;
  }
      editClicked(mealsEdit: Meal) {
        this.clickSender.emit(mealsEdit);
      }
    }
