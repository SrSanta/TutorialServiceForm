import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Evento } from '../models/evento.model';
import { Empleado } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

    private eventosUrl = 'http://localhost:3000/eventos';
    private empleadosUrl = 'http://localhost:3000/empleados';

  private eventosSubject = new BehaviorSubject<Evento[]>([]);
  registros$: Observable<Evento[]> = this.eventosSubject.asObservable();

  constructor() { }

  async getAllEventos(): Promise<Evento[]> {
    const response = await fetch(this.eventosUrl);
    const eventos = await response.json();
    this.eventosSubject.next(eventos);
    return eventos;
  }

    async getEvento(id: number): Promise<Evento> {
        const response = await fetch(this.eventosUrl + `${id}`);
        const evento = await response.json();
        return evento;
    }

    async addEvento(evento: Evento): Promise<Evento> {
        const response = await fetch(this.eventosUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(evento)
        });
        const newEvento = await response.json();
        this.getAllEventos();
        return newEvento;
    }

    async getAllempleados(): Promise<Empleado[]> {
        const response = await fetch(this.empleadosUrl);
        const empleados = await response.json();
        return empleados;
    }
    
}