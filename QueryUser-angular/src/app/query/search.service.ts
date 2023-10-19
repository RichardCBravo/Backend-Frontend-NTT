
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Inyeccion de dependecias
  private http: HttpClient = inject(HttpClient);

  // Variables de entorno: Si la validación se realiza mediante el API con el JSON de prueba, las URLs base del API y el JSON

  private enabledApi: boolean = environment.enabledApi
  private urlApi: string = environment.urlApi
  private urlJsonTest: string = environment.urlJsonTest

  getUser(id: string, type: string){
    if (this.enabledApi) {
      return this.getUserApi(id, type);
    }
    return this.http.get<User>(`${this.urlJsonTest}`)
  }

  getUserApi(id: string, type: string) {
    return this.http.get<User>(`${this.urlApi}/user`, {
      params: {
        id,
        type
      }
    })
  }
}
