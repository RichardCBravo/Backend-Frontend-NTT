import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dictionaryKeyText'
})



export class DictionaryKeyTextPipe implements PipeTransform {

  // Agrego key:value del diccionario
  dictionary = {
    'keydictionary-idNumber': 'Número de documento',
    'keydictionary-idType': 'Tipo de documento',
    'keydictionary-firstName': 'Primer nombre',
    'keydictionary-secondName': 'Segundo nombre',
    'keydictionary-fistLastName': 'Primer apellido',
    'keydictionary-secondLastName': 'Segundo apellido',
    'keydictionary-phone': 'Teléfono',
    'keydictionary-address': 'Dirección',
    'keydictionary-city': 'Ciudad de residencia',
  }

  transform(value: string): string {
    const dictionaryImp = Object.assign(this.dictionary);
    // Devuelvo el valor del key si existe; de lo contrario, en el mismo key que se solicitó.
    if(value in dictionaryImp){
      return dictionaryImp[value];
    }
    return value;
  }

}
