import { Component, OnInit } from '@angular/core';

interface Iselection{
  icon: string,
  title: string,
}


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
  constructor() { }

  ngOnInit() {
  }

}
