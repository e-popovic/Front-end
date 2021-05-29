import { Component, OnInit } from '@angular/core';
import {SensorService} from "../../services/sensor.service";
import {fiotReading} from "../../interfaces/fiotReading";

@Component({
  selector: 'fiot-front-page',
  templateUrl: './fiot-front-page.component.html',
  styleUrls: ['./fiot-front-page.component.css']
})
export class FiotFrontPageComponent implements OnInit {


  public reading1 : fiotReading | undefined;
  public reading2 : fiotReading | undefined;
  constructor(private frontSensorService: SensorService) { }

  ngOnInit(): void {

    // citanje simulated board 1
    this.frontSensorService.getReading("https://api.thingspeak.com/channels/1402242/feeds.json?results=10")
      .subscribe(data => {
      this.reading1 = data;
    });

    // citanje simulated board 2
    this.frontSensorService.getReading("https://api.thingspeak.com/channels/1402243/feeds.json?results=10")
      .subscribe(data => {
        this.reading2 = data;
      });
  }

  // parsiranje vremena iz timestampa
  getTime(timestamp : string){
    let help = timestamp.split("T");
    return help[1].slice(0,-1);
  }

}


