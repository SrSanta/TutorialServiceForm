export interface Evento {
  empleadoId: number;

  id: number;
  nombre: string;
  fecha: string;
  descripcion: string;
  categoria: 'log' | 'warn' | 'error';
  creacion: Date;
}
