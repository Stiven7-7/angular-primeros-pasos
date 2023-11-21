import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{counter}}</h3>

    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  counter: number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  decreaseBy():void {
    this.counter -= 1;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
