import { Component, OnInit } from '@angular/core';

import { Launch } from './models/launch';
import { SpacexDataApiService } from './spacex-data-api.service';

@Component({
  selector: 'atos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  numLaunches = 10;
  launches: Launch[];

  constructor(private spacexDataApiService: SpacexDataApiService) {}

  ngOnInit(): void {
    this.spacexDataApiService
      .getLastLaunches(this.numLaunches)
      .subscribe((launches) => {
        this.launches = launches;
      });
  }
}
