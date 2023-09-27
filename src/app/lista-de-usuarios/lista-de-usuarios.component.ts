import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss'],
})
export class ListaDeUsuariosComponent {
  alumnos: Alumno[] = [
    {
      nombre: "Mateo",
      apellido: "Fernández",
      idioma: "francés",
      fechaInscripcion: new Date(),
      aprobado: false
    },
    {
        nombre: "Valentina",
        apellido: "Morales",
        idioma: "alemán",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Santiago",
        apellido: "López",
        idioma: "francés",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Camila",
        apellido: "Rodríguez",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Andrés",
        apellido: "Pérez",
        idioma: "italiano",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Martina",
        apellido: "González",
        idioma: "francés",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Juan Carlos",
        apellido: "Patel",
        idioma: "portugués",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Sofia",
        apellido: "Ramirez",
        idioma: "italiano",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Ignacio",
        apellido: "Chang",
        idioma: "italiano",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Belén",
        apellido: "Ocampo",
        idioma: "italiano",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Carlos",
        apellido: "Delgado",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Luciana",
        apellido: "Medina",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Diego",
        apellido: "Navarro",
        idioma: "portugués",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Valeria",
        apellido: "Montoya",
        idioma: "portugués",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Tomás",
        apellido: "Silva",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Isabella",
        apellido: "Martínez",
        idioma: "francés",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "Pedro",
        apellido: "Espinoza",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Lucía",
        apellido: "Soto",
        idioma: "italiano",
        fechaInscripcion: new Date(),
        aprobado: true
    },
    {
        nombre: "Marcos",
        apellido: "Gómez",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: false
    },
    {
        nombre: "María Rosa",
        apellido: "Ortega",
        idioma: "inglés",
        fechaInscripcion: new Date(),
        aprobado: false
    }
];
}
