import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleado.service';
import { Empleado } from '../../models/persona.model';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  empleados: Empleado[] = [];
  eventos: Evento[] = [];
  form: FormGroup;
  registro!: Evento;
  datosEvento: boolean = false;

  constructor(private empleadosService: EmpleadosService, private eventosService: EventosService, private fb: FormBuilder) {
    this.form = this.fb.group({
      empleado: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      creacion: [new Date()]
    });
  }

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((empleados) => {
      this.empleados = empleados;
    });
    console.log(this.empleados);
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
  }

  addEvento(form: FormGroup) {
    if (form.valid) {
      this.eventosService.addEvento(form.value).subscribe(() => {
        this.eventos.push(form.value);
      });
    }
  }

  submit() {
    if (this.form.valid) {
      const now = new Date();

      const nuevoRegistro: Evento = {
        id: this.eventos.length + 1,
        empleadoId: this.form.value.empleado,
        nombre: this.form.value.nombre,
        descripcion: this.form.value.descripcion,
        categoria: this.form.value.categoria,
        fecha: this.form.value.fecha,
        creacion: now
      };

      this.eventosService.addEvento(nuevoRegistro).subscribe(() => {
        this.eventos.push(nuevoRegistro);
        this.form.reset();
      });
    } else {
      alert('Por favor, rellene todos los campos');
    }
  }
}