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
  public readingReal : fiotReading | undefined;
  public interval = 0;
  public problem1 = false;
  public problem2 = false
  public problemReal = false;
  constructor(private frontSensorService: SensorService) { }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 1000);
  }

  refreshData(){
    // citanje s real boarda
    this.frontSensorService.getReading("https://api.thingspeak.com/channels/1402239/feeds.json?results=10")
      .subscribe(data => {
        this.readingReal = data;
      });

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

  // pokazuje ikonu upozorenja
  public getWarningDisplay(isProblem:boolean) {
    if (isProblem)
      return 'inline';
    else
      return 'none';
  }

  // bira boju senzora, plavo = normalno, crveno = upozorenje
  public getChipColor(low:number, high:number, sensor:number, board:fiotReading) {

    switch (sensor){
      case 1:{
        if ((+(board.feeds["0"].field1) < low || +(board.feeds["0"].field1) > high) ||
          (+(board.feeds["1"].field1) < low || +(board.feeds["1"].field1) > high) ||
          (+(board.feeds["2"].field1) < low || +(board.feeds["2"].field1) > high) ||
          (+(board.feeds["3"].field1) < low || +(board.feeds["3"].field1) > high) ||
          (+(board.feeds["4"].field1) < low || +(board.feeds["4"].field1) > high) ||
          (+(board.feeds["5"].field1) < low || +(board.feeds["5"].field1) > high) ||
          (+(board.feeds["6"].field1) < low || +(board.feeds["6"].field1) > high) ||
          (+(board.feeds["7"].field1) < low || +(board.feeds["7"].field1) > high) ||
          (+(board.feeds["8"].field1) < low || +(board.feeds["8"].field1) > high) ||
          (+(board.feeds["9"].field1) < low || +(board.feeds["9"].field1) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      case 2:{
        if ((+(board.feeds["0"].field2) < low || +(board.feeds["0"].field2) > high) ||
          (+(board.feeds["1"].field2) < low || +(board.feeds["1"].field2) > high) ||
          (+(board.feeds["2"].field2) < low || +(board.feeds["2"].field2) > high) ||
          (+(board.feeds["3"].field2) < low || +(board.feeds["3"].field2) > high) ||
          (+(board.feeds["4"].field2) < low || +(board.feeds["4"].field2) > high) ||
          (+(board.feeds["5"].field2) < low || +(board.feeds["5"].field2) > high) ||
          (+(board.feeds["6"].field2) < low || +(board.feeds["6"].field2) > high) ||
          (+(board.feeds["7"].field2) < low || +(board.feeds["7"].field2) > high) ||
          (+(board.feeds["8"].field2) < low || +(board.feeds["8"].field2) > high) ||
          (+(board.feeds["9"].field2) < low || +(board.feeds["9"].field2) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      case 3:{
        if ((+(board.feeds["0"].field3) < low || +(board.feeds["0"].field3) > high) ||
          (+(board.feeds["1"].field3) < low || +(board.feeds["1"].field3) > high) ||
          (+(board.feeds["2"].field3) < low || +(board.feeds["2"].field3) > high) ||
          (+(board.feeds["3"].field3) < low || +(board.feeds["3"].field3) > high) ||
          (+(board.feeds["4"].field3) < low || +(board.feeds["4"].field3) > high) ||
          (+(board.feeds["5"].field3) < low || +(board.feeds["5"].field3) > high) ||
          (+(board.feeds["6"].field3) < low || +(board.feeds["6"].field3) > high) ||
          (+(board.feeds["7"].field3) < low || +(board.feeds["7"].field3) > high) ||
          (+(board.feeds["8"].field3) < low || +(board.feeds["8"].field3) > high) ||
          (+(board.feeds["9"].field3) < low || +(board.feeds["9"].field3) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      case 4:{
        if ((+(board.feeds["0"].field4) < low || +(board.feeds["0"].field4) > high) ||
          (+(board.feeds["1"].field4) < low || +(board.feeds["1"].field4) > high) ||
          (+(board.feeds["2"].field4) < low || +(board.feeds["2"].field4) > high) ||
          (+(board.feeds["3"].field4) < low || +(board.feeds["3"].field4) > high) ||
          (+(board.feeds["4"].field4) < low || +(board.feeds["4"].field4) > high) ||
          (+(board.feeds["5"].field4) < low || +(board.feeds["5"].field4) > high) ||
          (+(board.feeds["6"].field4) < low || +(board.feeds["6"].field4) > high) ||
          (+(board.feeds["7"].field4) < low || +(board.feeds["7"].field4) > high) ||
          (+(board.feeds["8"].field4) < low || +(board.feeds["8"].field4) > high) ||
          (+(board.feeds["9"].field4) < low || +(board.feeds["9"].field4) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      case 5:{
        if ((+(board.feeds["0"].field5) < low || +(board.feeds["0"].field5) > high) ||
          (+(board.feeds["1"].field5) < low || +(board.feeds["1"].field5) > high) ||
          (+(board.feeds["2"].field5) < low || +(board.feeds["2"].field5) > high) ||
          (+(board.feeds["3"].field5) < low || +(board.feeds["3"].field5) > high) ||
          (+(board.feeds["4"].field5) < low || +(board.feeds["4"].field5) > high) ||
          (+(board.feeds["5"].field5) < low || +(board.feeds["5"].field5) > high) ||
          (+(board.feeds["6"].field5) < low || +(board.feeds["6"].field5) > high) ||
          (+(board.feeds["7"].field5) < low || +(board.feeds["7"].field5) > high) ||
          (+(board.feeds["8"].field5) < low || +(board.feeds["8"].field5) > high) ||
          (+(board.feeds["9"].field5) < low || +(board.feeds["9"].field5) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      case 6:{
        if ((+(board.feeds["0"].field6) < low || +(board.feeds["0"].field6) > high) ||
          (+(board.feeds["1"].field6) < low || +(board.feeds["1"].field6) > high) ||
          (+(board.feeds["2"].field6) < low || +(board.feeds["2"].field6) > high) ||
          (+(board.feeds["3"].field6) < low || +(board.feeds["3"].field6) > high) ||
          (+(board.feeds["4"].field6) < low || +(board.feeds["4"].field6) > high) ||
          (+(board.feeds["5"].field6) < low || +(board.feeds["5"].field6) > high) ||
          (+(board.feeds["6"].field6) < low || +(board.feeds["6"].field6) > high) ||
          (+(board.feeds["7"].field6) < low || +(board.feeds["7"].field6) > high) ||
          (+(board.feeds["8"].field6) < low || +(board.feeds["8"].field6) > high) ||
          (+(board.feeds["9"].field6) < low || +(board.feeds["9"].field6) > high)) {
          switch (board){
            case this.reading1:{
              this.problem1 = true;
              break;
            }
            case this.reading2:{
              this.problem2 = true;
              break;
            }
          }
          return 'warn';
        }
        break;
      }
      default:{
        return 'none';
      }

    }
    return 'none';

  }

  // bira boju senzora, plavo = normalno, crveno = upozorenje
  public getChipColorReal(low:number, high:number, sensor:number) {

    if (this.readingReal){
      switch (sensor){
        case 1:{
          if (+(this.readingReal.feeds["0"].field1)){
            if ((+(this.readingReal.feeds["0"].field1) < low || +(this.readingReal.feeds["0"].field1) > high) ||
              (+(this.readingReal.feeds["2"].field1) < low || +(this.readingReal.feeds["2"].field1) > high) ||
              (+(this.readingReal.feeds["4"].field1) < low || +(this.readingReal.feeds["4"].field1) > high) ||
              (+(this.readingReal.feeds["6"].field1) < low || +(this.readingReal.feeds["6"].field1) > high) ||
              (+(this.readingReal.feeds["8"].field1) < low || +(this.readingReal.feeds["8"].field1) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field1) < low || +(this.readingReal.feeds["1"].field1) > high) ||
              (+(this.readingReal.feeds["3"].field1) < low || +(this.readingReal.feeds["3"].field1) > high) ||
              (+(this.readingReal.feeds["5"].field1) < low || +(this.readingReal.feeds["5"].field1) > high) ||
              (+(this.readingReal.feeds["7"].field1) < low || +(this.readingReal.feeds["7"].field1) > high) ||
              (+(this.readingReal.feeds["9"].field1) < low || +(this.readingReal.feeds["9"].field1) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        case 2:{
          if (+(this.readingReal.feeds["0"].field2)){
            if ((+(this.readingReal.feeds["0"].field2) < low || +(this.readingReal.feeds["0"].field2) > high) ||
              (+(this.readingReal.feeds["2"].field2) < low || +(this.readingReal.feeds["2"].field2) > high) ||
              (+(this.readingReal.feeds["4"].field2) < low || +(this.readingReal.feeds["4"].field2) > high) ||
              (+(this.readingReal.feeds["6"].field2) < low || +(this.readingReal.feeds["6"].field2) > high) ||
              (+(this.readingReal.feeds["8"].field2) < low || +(this.readingReal.feeds["8"].field2) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field2) < low || +(this.readingReal.feeds["1"].field2) > high) ||
              (+(this.readingReal.feeds["3"].field2) < low || +(this.readingReal.feeds["3"].field2) > high) ||
              (+(this.readingReal.feeds["5"].field2) < low || +(this.readingReal.feeds["5"].field2) > high) ||
              (+(this.readingReal.feeds["7"].field2) < low || +(this.readingReal.feeds["7"].field2) > high) ||
              (+(this.readingReal.feeds["9"].field2) < low || +(this.readingReal.feeds["9"].field2) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        case 3:{
          if (+(this.readingReal.feeds["0"].field3)){
            if ((+(this.readingReal.feeds["0"].field3) < low || +(this.readingReal.feeds["0"].field3) > high) ||
              (+(this.readingReal.feeds["2"].field3) < low || +(this.readingReal.feeds["2"].field3) > high) ||
              (+(this.readingReal.feeds["4"].field3) < low || +(this.readingReal.feeds["4"].field3) > high) ||
              (+(this.readingReal.feeds["6"].field3) < low || +(this.readingReal.feeds["6"].field3) > high) ||
              (+(this.readingReal.feeds["8"].field3) < low || +(this.readingReal.feeds["8"].field3) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field3) < low || +(this.readingReal.feeds["1"].field3) > high) ||
              (+(this.readingReal.feeds["3"].field3) < low || +(this.readingReal.feeds["3"].field3) > high) ||
              (+(this.readingReal.feeds["5"].field3) < low || +(this.readingReal.feeds["5"].field3) > high) ||
              (+(this.readingReal.feeds["7"].field3) < low || +(this.readingReal.feeds["7"].field3) > high) ||
              (+(this.readingReal.feeds["9"].field3) < low || +(this.readingReal.feeds["9"].field3) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        case 4:{
          if (+(this.readingReal.feeds["0"].field4)){
            if ((+(this.readingReal.feeds["0"].field4) < low || +(this.readingReal.feeds["0"].field4) > high) ||
              (+(this.readingReal.feeds["2"].field4) < low || +(this.readingReal.feeds["2"].field4) > high) ||
              (+(this.readingReal.feeds["4"].field4) < low || +(this.readingReal.feeds["4"].field4) > high) ||
              (+(this.readingReal.feeds["6"].field4) < low || +(this.readingReal.feeds["6"].field4) > high) ||
              (+(this.readingReal.feeds["8"].field4) < low || +(this.readingReal.feeds["8"].field4) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field4) < low || +(this.readingReal.feeds["1"].field4) > high) ||
              (+(this.readingReal.feeds["3"].field4) < low || +(this.readingReal.feeds["3"].field4) > high) ||
              (+(this.readingReal.feeds["5"].field4) < low || +(this.readingReal.feeds["5"].field4) > high) ||
              (+(this.readingReal.feeds["7"].field4) < low || +(this.readingReal.feeds["7"].field4) > high) ||
              (+(this.readingReal.feeds["9"].field4) < low || +(this.readingReal.feeds["9"].field4) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        case 5:{
          if (+(this.readingReal.feeds["0"].field5)){
            if ((+(this.readingReal.feeds["0"].field5) < low || +(this.readingReal.feeds["0"].field5) > high) ||
              (+(this.readingReal.feeds["2"].field5) < low || +(this.readingReal.feeds["2"].field5) > high) ||
              (+(this.readingReal.feeds["4"].field5) < low || +(this.readingReal.feeds["4"].field5) > high) ||
              (+(this.readingReal.feeds["6"].field5) < low || +(this.readingReal.feeds["6"].field5) > high) ||
              (+(this.readingReal.feeds["8"].field5) < low || +(this.readingReal.feeds["8"].field5) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field5) < low || +(this.readingReal.feeds["1"].field5) > high) ||
              (+(this.readingReal.feeds["3"].field5) < low || +(this.readingReal.feeds["3"].field5) > high) ||
              (+(this.readingReal.feeds["5"].field5) < low || +(this.readingReal.feeds["5"].field5) > high) ||
              (+(this.readingReal.feeds["7"].field5) < low || +(this.readingReal.feeds["7"].field5) > high) ||
              (+(this.readingReal.feeds["9"].field5) < low || +(this.readingReal.feeds["9"].field5) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        case 6:{
          if (+(this.readingReal.feeds["0"].field6)){
            if ((+(this.readingReal.feeds["0"].field6) < low || +(this.readingReal.feeds["0"].field6) > high) ||
              (+(this.readingReal.feeds["2"].field6) < low || +(this.readingReal.feeds["2"].field6) > high) ||
              (+(this.readingReal.feeds["4"].field6) < low || +(this.readingReal.feeds["4"].field6) > high) ||
              (+(this.readingReal.feeds["6"].field6) < low || +(this.readingReal.feeds["6"].field6) > high) ||
              (+(this.readingReal.feeds["8"].field6) < low || +(this.readingReal.feeds["8"].field6) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          else {
            if ((+(this.readingReal.feeds["1"].field6) < low || +(this.readingReal.feeds["1"].field6) > high) ||
              (+(this.readingReal.feeds["3"].field6) < low || +(this.readingReal.feeds["3"].field6) > high) ||
              (+(this.readingReal.feeds["5"].field6) < low || +(this.readingReal.feeds["5"].field6) > high) ||
              (+(this.readingReal.feeds["7"].field6) < low || +(this.readingReal.feeds["7"].field6) > high) ||
              (+(this.readingReal.feeds["9"].field6) < low || +(this.readingReal.feeds["9"].field6) > high)) {
              this.problemReal = true;
              return 'warn';
            }
          }
          break;
        }
        default:{
          return 'none';
        }

      }
    }
    return 'none';

  }

}


