import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Evento } from '../models/evento.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
    private eventosUrl = 'http://localhost:3000/eventos';

    constructor(private http: HttpClient) { }

    guardarEvento(evento: Evento): Observable<Evento> {
        return this.http.post<Evento>(this.eventosUrl, evento);
    }
}
//json-server --watch db.json