import { Component, Input, OnInit } from '@angular/core';

interface Iselection{
  icon: string,
  title: string,
}

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss']
})
export class SelectionsComponent implements OnInit {
  @Input() data: Iselection| null = null
  constructor() { }

  ngOnInit() {

  }

}
