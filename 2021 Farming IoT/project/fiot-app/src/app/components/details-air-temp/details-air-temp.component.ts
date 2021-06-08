import { Component, OnInit } from '@angular/core';
import {fiotReading} from "../../interfaces/fiotReading";
import {SensorService} from "../../services/sensor.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-air-temp',
  templateUrl: './details-air-temp.component.html',
  styleUrls: ['./details-air-temp.component.css']
})
export class DetailsAirTempComponent implements OnInit {

  public reading : fiotReading | undefined;
  public interval = 0;

  constructor(
    private frontSensorService: SensorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('boardId'));
    const myUrl = "https://api.thingspeak.com/channels/" + id + "/feeds.json?results=10"
    this.refreshData(myUrl);
    this.interval = setInterval(() => {
      this.refreshData(myUrl);
    }, 1000);
  }

  refreshData(myUrl:string){
    this.frontSensorService.getReading(myUrl)
        .subscribe(data => {
          this.reading = data;
        });
  }

  // parsiranje vremena iz timestampa
  getTime(timestamp : string){
    let help = timestamp.split("T");
    return help[1].slice(0,-1);
  }

  // obojaj preniske vrijednosti plavo, previsoke crveno
  getColor(value:string){
      if ((+value) < 20) return "blue";
      else if ((+value) > 24) return "red";
      else return "black";
  }

}
