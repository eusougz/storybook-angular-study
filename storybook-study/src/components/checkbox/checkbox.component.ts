import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  /**
   * Text that appears next to the checkbox.
   *
   * Optional.
   */
  @Input()
  text = '';

  @Output()
  onCheck = new EventEmitter<{ checked: boolean }>();

  private checked = false;

  constructor() {}

  ngOnInit(): void {}

  get isChecked() {
    return this.checked;
  }

  toggleChecked(): void {
    this.checked = !this.checked;
    this.onCheck.emit({ checked: this.isChecked });
  }
}
