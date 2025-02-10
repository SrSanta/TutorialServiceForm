export class Curso {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion: number;
  horas: number;
  activo: boolean;
  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    duracion: number,
    horas: number,
    activo: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.duracion = duracion;
    this.horas = horas;
    this.activo = activo;
  }
}
