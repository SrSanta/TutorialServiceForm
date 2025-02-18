import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { EmpleadosService } from '../../services/empleado.service';
import { ObservablesService } from '../../services/observables.service';
import { get } from 'node:http';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  eventos: Evento[] = [];

  constructor(private eventosService: EventosService, private empleadoService: EmpleadosService, private observableService: ObservablesService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  getEventosAll(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
  }

  getEvento(id: string) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      console.log(evento);
    });
  }

  eliminarDato(id: string) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      if (evento.categoria === 'log') {
        this.observableService.deleteLog();
      }
      if (evento.categoria === 'error') {
        this.observableService.deleteError();
      }
      if (evento.categoria === 'warn') {
        this.observableService.deleteWarm();
      }
    });

    this.eventosService.deleteEvento(id).subscribe(() => {
      this.getEventosAll();
    });
  }

  getEventosLog() {
    this.observableService.curLog$.subscribe((count) => {
      this.eventosService.getEventos().subscribe((eventos) => {
        this.eventos = eventos.filter((evento) => evento.categoria === 'log');
      });
    });
  }

  getEventosWarn() {
    this.observableService.curWarn$.subscribe((count) => {
      this.eventosService.getEventos().subscribe((eventos) => {
        this.eventos = eventos.filter((evento) => evento.categoria === 'warn');
      });
    });
  }

  getEventosError() {
    this.observableService.curError$.subscribe((count) => {
      this.eventosService.getEventos().subscribe((eventos) => {
        this.eventos = eventos.filter((evento) => evento.categoria === 'error');
      });
    });
  }
}