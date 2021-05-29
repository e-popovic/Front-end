import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {fiotReading} from "../interfaces/fiotReading";

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http:HttpClient) { }

  // procitaj stanje s ThingSpeak boarda
  getReading(myUrl : string): Observable<fiotReading>{
    return this.http.get<fiotReading>(myUrl);
  }

}
