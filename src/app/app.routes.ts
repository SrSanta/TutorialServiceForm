import { Routes } from '@angular/router';
import { EntradaComponent } from './component/entrada/entrada.component';
import { ListadoComponent } from './component/listado/listado.component';
import { FormularioComponent } from './component/formulario/formulario.component';

export const routes: Routes = [
    { path: '', component: EntradaComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent }
];
