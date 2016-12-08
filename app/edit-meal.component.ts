import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="edit-meal">
    <div *ngIf="childSelectedMeal">
      <div class="input">
        <label>Enter Meal</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="input">
        <label>Enter Calories</label>
        <input type="number" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div class="input">
        <label>Enter Details</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
 @Input() childSelectedMeal: Meal;
 @Output() doneClickedSender = new EventEmitter();
 doneClicked() {
   this.doneClickedSender.emit();
 }
}
