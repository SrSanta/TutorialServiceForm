import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { EmpleadosService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  eventos: Evento[] = [];

  constructor(private eventosService: EventosService, private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  getEvento(id: number) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      console.log(evento);
    });
  }
}