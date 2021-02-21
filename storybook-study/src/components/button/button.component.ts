import { Component, OnInit, Input } from '@angular/core';

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
   * Type influences the colors of background and borders.
   */
  @Input()
  type: 'filled' | 'outlined' = 'filled';

  constructor() {}

  ngOnInit(): void {}

  get buttonClasses() {
    return ['btn', `btn-${this.type}`];
  }
}
