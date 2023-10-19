// Datos del usuario o persona que se recibe del api o JSON
export interface User {
  idNumber:       string;
  idType:         string;
  firstName:      string;
  secondName?:     string;
  fistLastName:   string;
  secondLastName?: string;
  phone:          string;
  address:        string;
  city:           string;
}
