import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleado.service';
import { Empleado } from '../../models/persona.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-empleado',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-empleado.component.html',
  styleUrl: './formulario-empleado.component.css'
})
export class FormularioEmpleadoComponent {
  empleados: Empleado[] = [];
  formEmp: FormGroup;
  nombre: string = '';

  constructor(private empleadosService: EmpleadosService, private fb: FormBuilder) {
    this.formEmp = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departamento: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((empleados) => {
      this.empleados = empleados;
    });
  }

  addEmpleado(formEmp: FormGroup) {
    if (formEmp.valid) {
      this.empleadosService.addEmpleado(formEmp.value).subscribe(() => {
        this.empleados.push(formEmp.value);
      });
    }
  }

  submit() {
    const nuevoEmpleado: Empleado = {
      id: (Number(this.empleados[this.empleados.length - 1].id) + 1).toString(),
      nombre: this.formEmp.value.nombre,
      apellido: this.formEmp.value.apellido,
      email: this.formEmp.value.email,
      departamento: this.formEmp.value.departamento
    };

    this.empleadosService.addEmpleado(nuevoEmpleado).subscribe(() => {
      this.empleados.push(nuevoEmpleado);
    });

    this.formEmp.reset();
  }
}
