import { Empleado } from "./persona.model";
import { Evento } from "./evento.model";

export interface DatosJSON {
empleados: Empleado[];
eventos: Evento[];
}