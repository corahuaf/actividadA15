import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newData = { nombre: '', apellidos: '', carrera:'' };
  datos = [
    {
      nombre: "fernando",
      apellidos: "corahua",
      carrera: "Ing. sistemas"
    },
    {
      nombre: "luis",
      apellidos: "llanos",
      carrera: "Ing. sistemas"
    }
  ];

  deleteItem(index: number) {
    if (confirm('¿Estás seguro de querer eliminar este elemento?')) {
      this.datos.splice(index, 1);
    }
  }

  addData() {
    this.datos.push(this.newData);
    this.newData = { nombre: '', apellidos: '', carrera: '' };
  }

  confirm(){
    
  }
}
