import { Routes } from '@angular/router';
import { EntradaComponent } from './component/entrada/entrada.component';
import { ListadoComponent } from './component/listado/listado.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { FormularioEmpleadoComponent } from './component/formulario-empleado/formulario-empleado.component';

export const routes: Routes = [
  { path: '', component: EntradaComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario-empleado', component: FormularioEmpleadoComponent },
];
