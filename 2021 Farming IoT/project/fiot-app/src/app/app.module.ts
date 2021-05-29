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
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
