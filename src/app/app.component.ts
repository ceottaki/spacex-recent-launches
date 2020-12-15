import { Component, OnInit } from '@angular/core';

import { Launch } from './models/launch';
import { SpacexDataApiService } from './spacex-data-api.service';

@Component({
  selector: 'atos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  launches: Launch[];

  constructor(private spacexDataApiService: SpacexDataApiService) {}

  ngOnInit(): void {
    this.spacexDataApiService.getLastLaunches(10).subscribe((launches) => {
      this.launches = launches;
    });
  }
}
