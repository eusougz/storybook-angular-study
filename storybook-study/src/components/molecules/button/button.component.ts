import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  /**
   * The main label of the button.
   */
  @Input()
  label: string = '';

  /**
   * Influences the colors of background and borders.
   */
  @Input()
  type: 'filled' | 'outlined' | 'default' = 'default';

  /**
   * Emits events when button is clicked.
   */
  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  get buttonClasses() {
    return ['btn', `btn-${this.type}`];
  }

  get typographyColor() {
    if (this.type === 'filled') return 'white';
    return 'black';
  }
}
