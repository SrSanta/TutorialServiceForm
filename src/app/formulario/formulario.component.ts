import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../models/evento.model';
import { Empleado } from '../models/persona.model';
import { EmpleadosService } from '../services/empleado.service';


@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  empleados: Empleado[] = [];
  eventos: Evento[] = [];

  constructor(private eventoService: EventosService, private empleadoService: EmpleadosService) { }

  ngOnInit(): void {  
    this.empleadoService.getEmpleados().subscribe((empleado) => {
      this.empleados = empleado;
      console.log(empleado);
    });
    this.eventoService.getEventos().subscribe((evento) => {
      this.eventos = evento;
      console.log(evento);
    });
  }

  guardarEvento(form: FormGroup){
    if(form.valid){
      const evento: Evento = form.value;
      this.eventoService.addEvento(evento).subscribe(() => {
        /* this.eventos.push(evento); */
      });
    }
  }
}
