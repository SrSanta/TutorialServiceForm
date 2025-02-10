import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  countLog = 0;
  countWarn = 0;
  countError = 0;

  constructor() { }

  log(msg: string) {
    console.log(msg);
    this.countLog++;
    this.showCounts();
  }

  error(msg: string) {
    console.error(msg);
    this.countError++;
    this.showCounts();
  }

  warn(msg: string) {
    console.warn(msg);
    this.countWarn++;
    this.showCounts();
  }

  showCounts() {
    console.log(this.countLog, this.countWarn, this.countError);
  }
}
