import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiotHeaderComponent } from './components/fiot-header/fiot-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FiotFooterComponent } from './components/fiot-footer/fiot-footer.component';
import { FiotFrontPageComponent } from './components/fiot-front-page/fiot-front-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailsAirTempComponent } from './components/details-air-temp/details-air-temp.component';
import {MatChipsModule} from '@angular/material/chips';
import { DetailsHumidityComponent } from './components/details-humidity/details-humidity.component';
import { DetailsPressureComponent } from './components/details-pressure/details-pressure.component';
import { DetailsLeafWetComponent } from './components/details-leaf-wet/details-leaf-wet.component';
import { DetailsSoilMoistureComponent } from './components/details-soil-moisture/details-soil-moisture.component';
import { DetailsSoilTempComponent } from './components/details-soil-temp/details-soil-temp.component';
import { DetailsFruitDiamComponent } from './components/details-fruit-diam/details-fruit-diam.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FiotHeaderComponent,
    FiotFooterComponent,
    FiotFrontPageComponent,
    DetailsAirTempComponent,
    DetailsHumidityComponent,
    DetailsPressureComponent,
    DetailsLeafWetComponent,
    DetailsSoilMoistureComponent,
    DetailsSoilTempComponent,
    DetailsFruitDiamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
