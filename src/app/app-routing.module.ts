import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadomascotasComponent } from './Controlador/listado-mascotas/listadomascotas.component';
import { AccionesVeterinariaComponent } from './Controlador/acciones-veterinaria/acciones-veterinaria.component';
import { VisualizarMascotaComponent } from './Controlador/visualizar-mascota/visualizar-mascota.component';

const routes: Routes = [
  { path: '', redirectTo: 'listadoMascostas', pathMatch: 'full' },
  { path: 'listadoMascostas', component: ListadomascotasComponent },
  { path: 'visualizarMascostas/:id', component: VisualizarMascotaComponent },
  { path: 'agregarMascostas', component: AccionesVeterinariaComponent },
  { path: 'editarMascota/:id', component: AccionesVeterinariaComponent },
  { path: '**', redirectTo: 'listadoMascostas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
