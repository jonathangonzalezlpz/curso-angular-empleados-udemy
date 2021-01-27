import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-empleados', pathMatch: 'full' }, //Establecemos una ruta por defecto para el caso en que no se indique un path
  {path: 'list-empleados', component: ListEmpleadosComponent},
  {path: 'create-empleado', component: CreateEmpleadoComponent},
  {path: '**', redirectTo: 'list-empleados', pathMatch:'full'} //Caso de path no válido, IMPORTANTE COLOCAR AL FINAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
