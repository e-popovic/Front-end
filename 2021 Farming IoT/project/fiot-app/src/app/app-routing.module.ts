import { NgModule } from '@angular/core';
import {FiotFrontPageComponent} from "./components/fiot-front-page/fiot-front-page.component";
import { RouterModule, Routes} from "@angular/router";
import {DetailsAirTempComponent} from "./components/details-air-temp/details-air-temp.component";
import {DetailsHumidityComponent} from "./components/details-humidity/details-humidity.component";
import {DetailsLeafWetComponent} from "./components/details-leaf-wet/details-leaf-wet.component";
import {DetailsPressureComponent} from "./components/details-pressure/details-pressure.component";
import {DetailsSoilMoistureComponent} from "./components/details-soil-moisture/details-soil-moisture.component";
import {DetailsSoilTempComponent} from "./components/details-soil-temp/details-soil-temp.component";
import {DetailsFruitDiamComponent} from "./components/details-fruit-diam/details-fruit-diam.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FiotFrontPageComponent },
  { path: ':boardId/air-temperature', component: DetailsAirTempComponent },
  { path: ':boardId/humidity', component: DetailsHumidityComponent },
  { path: ':boardId/leaf-wetness', component: DetailsLeafWetComponent },
  { path: ':boardId/pressure', component: DetailsPressureComponent },
  { path: ':boardId/soil-moisture', component: DetailsSoilMoistureComponent },
  { path: ':boardId/soil-temperature', component: DetailsSoilTempComponent },
  { path: ':boardId/fruit-diameter', component: DetailsFruitDiamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
