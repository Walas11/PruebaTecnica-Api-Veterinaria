import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Mascota } from 'src/app/Interface/mascota';
import { MascotasService } from 'src/app/Servicios/mascotas.service';

@Component({
  selector: 'app-acciones-veterinaria',
  templateUrl: './acciones-veterinaria.component.html',
  styleUrls: ['./acciones-veterinaria.component.css']
})
export class AccionesVeterinariaComponent {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, 
    private _mascotaService: MascotasService, 
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _aRout: ActivatedRoute
    )
  {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      especie: ['',Validators.required],
      raza: ['',Validators.required],
      fechaNacimiento: ['',Validators.required],
      idDueno: ['',Validators.required]
    })

    this.id = Number(this._aRout.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void{
    if (this.id != 0) {
      this.obtenerMascota(this.id);
    }
  }

  ngOnDestroy(): void {
  }

  obtenerMascota(id: number)
  {
    this.loading = true;
    this._mascotaService.getUnaMascota(id).subscribe(data =>{
      this.form.setValue({
        nombre: data.nombre,
        especie: data.especie,
        raza: data.raza,
        fechaNacimiento: data.fechaNacimiento,
        idDueno: data.idDueno
      })
      this.loading = false
    })
  }

  agregarEditarMascota(){
    
    // Se arma el objeto
    const archivo: Mascota = {
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      especie: this.form.value.especie,
      raza: this.form.value.raza,
      fechaNacimiento: this.form.value.fechaNacimiento,
      idDueno: this.form.value.idDueno,
      fechaCreacion: this.form.value.fechaCreacion
    }

    if (this.id != 0) {
      archivo.id = this.id
      this.editarMascota(this.id, archivo); 
    } else {
      this.agregarMascota(archivo);
    }

  }

  agregarMascota(archivo: Mascota)
  {
    // Enviar objeto al backEnd
    this._mascotaService.addMascota(archivo).subscribe(data=>{
      this.mensajeExito(this.id);
      this._router.navigate(['listadoMascostas']);
    })
  }

  editarMascota(id: number, archivo: Mascota)
  {
    // Enviar objeto al backEnd
    this.loading = true;
    this._mascotaService.updateMascota(id,archivo).subscribe(()=>{
    this.mensajeExito(id);
    this._router.navigate(['listadoMascostas']);
    this.loading = false;
    })
  }

  mensajeExito(id: number)
  {
    if (id != 0) {
      this._snackBar.open("La mascota fue editada con exito", " ", {
        duration: 4000,
        horizontalPosition: 'center'
      });
    }
    else{
      this._snackBar.open("La mascota fue creada con exito", " ", {
        duration: 4000,
        horizontalPosition: 'center'
      });
    }
  }

}
