export class Estudiante {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  activo: boolean;
  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    edad: number,
    email: string,
    activo: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }
}
