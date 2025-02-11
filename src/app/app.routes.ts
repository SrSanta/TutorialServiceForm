import { Routes } from '@angular/router';
import { EntradaComponent } from './entrada/entrada.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: EntradaComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent }
];
