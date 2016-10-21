import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
  <label>Enter Meal</label>
  <input [(ngModel)]="childSelectedMeal.name">
  <label>Enter Calories</label>
  <input type="number" [(ngModel)]="childSelectedMeal.calories">
  <label>Enter Details</label>
  <input [(ngModel)]="childSelectedMeal.details">
  <button (click)="doneClicked()">Done</button>
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
