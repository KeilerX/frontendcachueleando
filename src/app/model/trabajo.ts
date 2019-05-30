export class Trabajo {
  id: number;
  descripcion: string;
  sueldo: number;
  estado: boolean;
  contratante: {
    id: number;
    contraseña: string;
    correo: string;
    sexo: boolean;
    ultima_conexion: Date;
    fecha_nacimiento: Date;
    nombres: string;
    apellido_materno: string;
    apellido_paterno: string;
    direccion: string;
  };
  organizacion: {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    descripcion: string;
  };
}
