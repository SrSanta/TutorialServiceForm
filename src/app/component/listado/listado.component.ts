import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  eventos: Evento[] = [];

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((evento) => {
      this.eventos = evento;
      console.log(evento);
    });
  }
}
