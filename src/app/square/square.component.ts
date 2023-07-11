import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
      <button mat-flat-button  *ngIf="!value">{{value}}</button>
      <button mat-flat-button style="color:red;"*ngIf="value=='X'">{{value}}</button>
      <button mat-flat-button style="color:yellow;" *ngIf="value=='O'">{{value}}</button>
  `,
  styles: ['button { width: 100% !important; height: 100% !important; font-size: 4.5em !important; margin:0.2rem;}']
})
export class SquareComponent {
  @Input()
  value!: "X" | "O";
}
