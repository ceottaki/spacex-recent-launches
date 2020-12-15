import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Launch } from './models/launch';

@Injectable({
  providedIn: 'root',
})
export class SpacexDataApiService {
  private launchesUrl =
    'https://api.spacexdata.com/v3/launches/past?sort=flight_number&order=desc&limit=';

  constructor(private http: HttpClient) {}

  getLastLaunches(numberLaunches: number = 10): Observable<Launch[]> {
    return this.http.get<any[]>(`${this.launchesUrl}${numberLaunches}`).pipe(
      map((rawLaunches) => this.transformLaunchData(rawLaunches)),
      catchError(this.handleError<Launch[]>('getLastLaunches', []))
    );
  }

  private transformLaunchData(rawLaunchesData: any[]): Launch[] {
    return rawLaunchesData.map((launch) => ({
      missionName: launch.mission_name,
      launchDateTime: new Date(launch.launch_date_unix * 1000),
      rocketType: launch.rocket ? launch.rocket.rocket_type : null,
      coresLandingAttempt:
        launch.rocket &&
        launch.rocket.first_stage &&
        launch.rocket.first_stage.cores
          ? launch.rocket.first_stage.cores[0].landing_intent
          : false,
      coresLandingSuccessful:
        launch.rocket &&
        launch.rocket.first_stage &&
        launch.rocket.first_stage.cores
          ? launch.rocket.first_stage.cores[0].land_success
          : false,
      customers: [],
    }));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(operation, error); // Ideally we would log to a logging infrastructure and not to the console.

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
