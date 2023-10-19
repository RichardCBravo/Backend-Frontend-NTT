import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  // Inyeccion de las dependecias que necesito Angular 15
  private fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router)

  // Creo mi formulario reactivo
  public myForm: FormGroup = this.fb.group({
    idType: ['', [Validators.required]],
    idNum: ['', [Validators.required, this.numberLength]]
  })

  // Aquí agregaremos el validador personalizado
  numberLength(control: FormControl) {
    // Elimina cualquier letra que el usuario haya ingresado.
    const value = control.value.trim();
    const cleanedValue: string = value.replaceAll(/[^0-9]/g, '');
    // Valido el numero de caracteres que tiene el input sin los separadores del miles
    if (cleanedValue.length < 8 || cleanedValue.length > 11) {
      return { numberLength: true };
    }
    return null;
  }

  search() {
    // Elimina cualquier letra que el usuario haya ingresado.
    const value = this.myForm.value['idNum'].trim();
    const cleanedValue = value.replaceAll(/[^0-9]/g, '');
    // navego a la pagina de busqueda con los parametros que necesita
    this.router.navigate(['/consulta/search'], {queryParams: {id: cleanedValue, type: this.myForm.value['idType']}})
  }

  showError(control: AbstractControl) {
    // Valida si el input es válido y ha sido tocado.
    return control.invalid && control.touched
  }

  format(input : HTMLInputElement) {
    // Elimina cualquier letra que el usuario haya ingresado.
    const value = input.value.trim();
    const cleanedValue = value.replaceAll(/[^0-9]/g, '');

    if (cleanedValue !== '') {
      // Convierte el valor en número y formatea con separadores de miles.
      const formattedValue = new Intl.NumberFormat('es-CO').format(Number(cleanedValue));
      // Actualiza el valor del campo de entrada con el número formateado.
      input.value = formattedValue;
    } else {
      // Si esta vacio que me muestre en vacio y no en 0
      input.value = '';
    }
  }
}
