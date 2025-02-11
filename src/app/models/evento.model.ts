export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  empleado: number;
  descripcion: string;
  categoria: 'log' | 'warn' | 'error';
}