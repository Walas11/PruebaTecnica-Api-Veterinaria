import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascota } from '../Interface/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Mascota/';

  constructor(private http: HttpClient) 
  {

  }

  getMascotas(): Observable<Mascota[]>
  {
    return this.http.get<Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getUnaMascota(id: number): Observable<Mascota>
  {
    return this.http.get<Mascota>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  DeleteUnaMascota(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addMascota(mascota: Mascota): Observable<Mascota>
  {
    return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
  }

  updateMascota(id: Number, mascota: Mascota): Observable<void>
  {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, mascota);
  }

}
