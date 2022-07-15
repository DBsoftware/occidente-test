import { Component, OnInit } from '@angular/core';
import { Ioptions, Iselection } from 'src/app/interfaces/selection';



@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  items: Array<Iselection> = [
    {icon: 'box2-heart', title: "Cartera Ordinaria"},
    {icon: 'house', title: "Leasing"}
  ]
  arrayOfOptions: Array<Ioptions> = []
  constructor() { }

  ngOnInit() {
    this.arrayOfOptions = [
    {
      title: 'Operaciones',
      help: 'Indique la linea de credito que quiere reconsiderar',
      items: this.items
    },
    {
      title: 'Indicadores',
      help: 'Nada por el momento!',
      items:null
    },
    {
      title: 'Informacion Cliente',
      help: 'Nada por el momento!',
      items:null
    }]

  }

}
