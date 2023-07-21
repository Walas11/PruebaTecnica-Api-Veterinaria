import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/Interface/mascota';
import { MascotasService } from 'src/app/Servicios/mascotas.service';

@Component({
  selector: 'app-listadomascotas',
  templateUrl: './listadomascotas.component.html',
  styleUrls: ['./listadomascotas.component.css']
})
export class ListadomascotasComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id','nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno', 'Acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _mascotaService: MascotasService)
  {

  }

  ngOnInit(): void{
    this.obtenerMascotas();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
  }

  obtenerMascotas(){
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    },)
  }

  eliminarMascota(id: number){
    this.loading = true;
    this._mascotaService.DeleteUnaMascota(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerMascotas();
    },)
  }

  mensajeExito()
  {
      this._snackBar.open("La mascota fue eliminada con exito", " ", {
        duration: 4000,
        horizontalPosition: 'center'
      });
  }

}