import { Component, OnInit, Input } from '@angular/core';

export const icons = ['check'];

export type Icon = typeof icons[number];

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input()
  icon: Icon = 'check';

  constructor() {}

  ngOnInit(): void {}

  get styles() {
    return {
      height: '18px',
      width: '18px',
      backgroundColor: '#707070',
      'mask-size': 'contain',
      'mask-position': 'center',
      'mask-repeat': 'no-repeat',
      'mask-image': `url("../../../assets/icons/${this.icon}.svg")`,
      '-webkit-mask-size': 'contain',
      '-webkit-mask-position': 'center',
      '-webkit-mask-repeat': 'no-repeat',
      '-webkit-mask-image': `url("../../../assets/icons/${this.icon}.svg")`,
    };
  }
}
