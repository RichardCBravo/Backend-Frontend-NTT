import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from '../../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{


  // Inyeccion de dependencias Angular 15
  private searchServer : SearchService = inject(SearchService);
  private routerActive: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  public dataUser!: User;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public keysData : string[] = [];

  ngOnInit(): void {

    // Variables del query que va a hacer
    const id = this.routerActive.snapshot.queryParamMap.get('id');
    const type = this.routerActive.snapshot.queryParamMap.get('type');

    // Si no tiene los parametros da error 404
    if(!id || !type) {
      this.router.navigate(['/404'])
    }

    // Hace la peticion al servicio para traer los datos
    this.searchServer.getUser(id!, type!)
      .subscribe(resp => {
        this.dataUser = resp

        // Esta validacion no es necesaria si se hace la peticion al API,
        // pero como el JSON de prueba siempre va a responder se deja de esta forma
        if (this.dataUser.idNumber !== id || this.dataUser.idType !== type) {
          this.router.navigate(['/404'])
        }
        // Genera un arreglo de las keys del objeto dataUser,
        // se usa para tener un "diccionario y no repetir tanto codigo a mano en el html"
        this.keysData = Object.keys(this.dataUser);
        this.isLoading.next(false)
      })
  }

  // Metodo para retornar el valor de cada key del Objeto dataUser, por medio del key
  valueProp(prop: string) {
    if(prop in this.dataUser) {
      return Object.assign(this.dataUser)[prop] === 'C'
      ? 'Cedula de ciudadanía'
      : Object.assign(this.dataUser)[prop] === 'P'
      ? 'Pasaporte' : Object.assign(this.dataUser)[prop];
    }
  }

}
