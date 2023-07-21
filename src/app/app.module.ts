import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { PublicacionModule } from './Publicacion/publicacion/publicacion.module';

//Controlador
import { AccionesVeterinariaComponent } from './Controlador/acciones-veterinaria/acciones-veterinaria.component';
import { ListadomascotasComponent } from './Controlador/listado-mascotas/listadomascotas.component';
import { VisualizarMascotaComponent } from './Controlador/visualizar-mascota/visualizar-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccionesVeterinariaComponent,
    AccionesVeterinariaComponent,
    ListadomascotasComponent,
    VisualizarMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
