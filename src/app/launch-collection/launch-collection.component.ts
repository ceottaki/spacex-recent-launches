import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../models/launch';

@Component({
  selector: 'atos-launch-collection',
  templateUrl: './launch-collection.component.html',
  styleUrls: ['./launch-collection.component.scss'],
})
export class LaunchCollectionComponent implements OnInit {
  @Input() launches: Launch[];

  constructor() {}

  ngOnInit(): void {}
}
