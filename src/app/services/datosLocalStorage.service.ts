/* import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DatosJSON } from '../models/datosJSON.model';

@Injectable({
  providedIn: 'root'
})

export class DatosLocalStorageService {
  constructor(private http: HttpClient) { }

  iniciarStorage(): void {
    const contieneDatos = localStorage.getItem('datos');

    if (!contieneDatos){
        this.http.get<DatosJSON>('../../db.json').subscribe((datos) => {
            localStorage.setItem('empleados', JSON.stringify(datos.empleados));
            localStorage.setItem('eventos', JSON.stringify(datos.eventos));
            localStorage.setItem('datos', 'true');
        });
    } else {
        console.log('Datos ya cargados');
    }
  }
} */