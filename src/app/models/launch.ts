export interface Launch {
  missionName: string;
  launchDateTime: Date;
  rocketType?: string;
  rocketName?: string;
  coresLandingAttempt: boolean;
  coresLandingSuccessful: boolean;
  customers: string[];
  missionPatchImgUrl?: string;
  details?: string;
  wikipediaUrl?: string;
  videoLink?: string;
  imageUrls: string[];
}
