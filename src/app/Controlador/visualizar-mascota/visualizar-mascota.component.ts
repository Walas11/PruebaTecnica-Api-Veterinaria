import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mascota } from 'src/app/Interface/mascota';
import { MascotasService } from 'src/app/Servicios/mascotas.service';

@Component({
  selector: 'app-visualizar-mascota',
  templateUrl: './visualizar-mascota.component.html',
  styleUrls: ['./visualizar-mascota.component.css']
})
export class VisualizarMascotaComponent {

  // Variables
  id!: number;
  mascota!: Mascota;
  routeSub!: Subscription;

  constructor(private _mascotasService: MascotasService,
              private aRoute: ActivatedRoute)
  {
  
  }

  ngOnInit(): void {
      this.routeSub =  this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenerUnaMascota();
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  obtenerUnaMascota()
  {
    this._mascotasService.getUnaMascota(this.id).subscribe(data => {
      this.mascota = data;
    })
  }
}
