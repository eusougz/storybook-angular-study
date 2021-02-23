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
  icon: Icon | undefined;

  constructor() {}

  ngOnInit(): void {}

  get styles() {
    return {
      height: '1rem',
      width: '1rem',
      backgroundColor: '#fcfcfc',
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
