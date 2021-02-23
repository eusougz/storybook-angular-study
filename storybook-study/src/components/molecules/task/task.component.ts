import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  /**
   * Name of the task.
   */
  @Input()
  name = '';

  /**
   * Duration of the task.
   */
  @Input()
  duration: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
