import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../models/launch';

@Component({
  selector: 'atos-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchComponent implements OnInit {
  @Input() launch: Launch;

  constructor() {}

  ngOnInit(): void {}
}
