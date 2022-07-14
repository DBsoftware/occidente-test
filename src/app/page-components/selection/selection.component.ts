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
    {icon: 'house-heart', title: "Cartera Ordinaria"},
    {icon: 'house-heart', title: "Leasing"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
