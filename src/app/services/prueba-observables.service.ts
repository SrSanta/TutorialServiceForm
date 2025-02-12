import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaObservablesService {

  constructor() { }

  private selectEmpleado = new BehaviorSubject<any>(null);
  curEmpleado$ = this.selectEmpleado.asObservable(); 
  //se usa para el subscribe, para que se pueda subscribir a los cambios en el componente (seria pruebaObservable.curEmpleado$.subscribe()) 
  // impotando pruebaObservableSercice en el constructor del componente

  empleadoCambio(value: any) {
    this.selectEmpleado.next(value);
  }
}
