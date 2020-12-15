export interface Launch {
  missionName: string;
  launchDateTime: Date;
  rocketType: string;
  coresLandingAttempt: boolean;
  coresLandingSuccessful: boolean;
  customers: string[];
}
