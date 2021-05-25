import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiotHeaderComponent } from './fiot-header/fiot-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FiotFooterComponent } from './fiot-footer/fiot-footer.component';
import { FiotFrontPageComponent } from './fiot-front-page/fiot-front-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    FiotHeaderComponent,
    FiotFooterComponent,
    FiotFrontPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
