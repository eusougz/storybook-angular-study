import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})
export class TypographyComponent implements OnInit {
  /**
   * Type of the text.
   */
  @Input()
  type: 'h1' | 'h2' | 'label' | 'button-content' = 'label';

  /**
   * Text content.
   */
  @Input()
  text = '';

  /**
   * Color of the text.
   */
  @Input()
  color: 'black' | 'white' = 'black';

  constructor() {}

  ngOnInit(): void {}

  get classes() {
    return ['text', `text-${this.color}`, `text-${this.type}`];
  }
}
