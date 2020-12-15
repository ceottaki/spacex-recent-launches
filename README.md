# SpaceX Recent Launches

This simple project uses the [SpaceX Data API](https://docs.spacexdata.com/) to display information about the last 10 launches by [SpaceX](https://www.spacex.com/).

We are using version 3 of the API, despite it not having newer data as of November 2020, as this was given as an initial requirement. We will shortly be updating the application to use V4.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development

Other than Angular, the only library added was [ng-bootstrap](https://ng-bootstrap.github.io/), as this project was done in the very little free time available and using Bootstrap allows for rapidly creating a good presentation that is mobile-friendly as well as more easily addressing accessibility concerns.

### Continuing development

These are the currently identified areas for improvement:

- Updating the service to use [SpaceX Data API V4](https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4)
- Increase test coverage (a few "TODO" items have already been added to the code)
- I18n
- E2E tests

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
