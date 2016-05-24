import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'spinner',
  inputs: ['show', 'dark'],
  template: `
    <div class="spinner" *ngIf="show" [class.dark]="dark">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>`
})

export class Spinner { 
  
  @Input() show: boolean;
  @Input() dark: boolean;
  
  constructor() { }
}