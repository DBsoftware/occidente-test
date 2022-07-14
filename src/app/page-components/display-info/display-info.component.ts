import { UserData } from './../../interfaces/user-data';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.scss']
})
export class DisplayInfoComponent implements OnInit {
  rawdata: UserData = {
    "nit":"800220154",
    "nombre": "Flotas la Macarena",
    "capa": "Oro",
    "segmento": "Aval",
    "gerenteRelacion": "Carlos Gómez"
    }
    data: Observable<UserData | null> = of(null)
  constructor() { }

  ngOnInit() {

    this.data = of(this.rawdata)
  }

}
