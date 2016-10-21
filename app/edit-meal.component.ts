import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="selectedmeal">
  <label>Enter Meal</label>
  <input [(ngModel)]="selectedmeal.name">
  <label>Enter Calories</label>
  <input type="number" [(ngModel)]="selectedmeal.calories">
  <label>Enter Details</label>
  <input [(ngModel)]="selectedmeal.details">
  <button (click)="hideMeal()">Done</button>
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
