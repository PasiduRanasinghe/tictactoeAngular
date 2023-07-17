import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
      <button *ngIf="!value">{{value}}</button>
      <button style="color:white;"*ngIf="value">{{value}}</button>
    
  `,
  styles: ['button { width: 100% !important; height: 100% !important; font-size: 4.7em !important; background:rgb(46, 46, 46); border: none;}']
})
export class SquareComponent {
  @Input()
  value!: "X" | "O";
}
