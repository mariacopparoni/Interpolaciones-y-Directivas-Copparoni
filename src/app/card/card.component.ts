import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // ../../assets/img/logo.png

idiomas: Array<any> = [
  {
    id: 1,
    nombre: "Inglés",
    desc: "Ideal para tu viaje multidestinos",
    precio: 5000,
    imagen: '../../assets/img/uk.png',
    clases:10
},

{
    id: 1,
    nombre: "Francés",
    desc: "Para que puedas pedir algo más que Croissants",
    precio: 5000,
    imagen: '../../assets/img/france.png',
    clases:10
},

{
    id: 1,
    nombre: "Portugués",
    desc: "El idioma 'mais grande du mundo'",
    precio: 5000,
    imagen: '../../assets/img/portugal.png',
    clases:10
},

{
    id: 1,
    nombre: "Italiano",
    desc: "Porque juntar las puntas de los dedos no es suficiente",
    precio: 5000,
    imagen: '../../assets/img/italy.png',
    clases:10
},

{
    id: 1,
    nombre: "Alemán",
    desc: "Esas cervezas no se van a tomar solas",
    precio: 5000,
    imagen: '../../assets/img/germany.png',
    clases:10
},



];


}
