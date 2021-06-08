import { Component, OnInit } from '@angular/core';
import {fiotReading} from "../../interfaces/fiotReading";
import {SensorService} from "../../services/sensor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-soil-moisture',
  templateUrl: './details-soil-moisture.component.html',
  styleUrls: ['./details-soil-moisture.component.css']
})
export class DetailsSoilMoistureComponent implements OnInit {

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
    if ((+value) < 10) return "blue";
    else if ((+value) > 30) return "red";
    else return "black";
  }

}
