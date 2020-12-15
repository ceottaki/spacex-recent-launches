import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaunchComponent } from './launch/launch.component';
import { LaunchCollectionComponent } from './launch-collection/launch-collection.component';
import { ArrayJoinPipe } from './array-join.pipe';
import { BoolToYesNoPipe } from './bool-to-yes-no.pipe';
import { LaunchDetailsModalComponent } from './launch-details-modal/launch-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    LaunchCollectionComponent,
    ArrayJoinPipe,
    BoolToYesNoPipe,
    LaunchDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
