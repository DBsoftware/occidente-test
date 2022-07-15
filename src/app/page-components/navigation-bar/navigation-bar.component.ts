import { of, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/Api.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  name:Observable<any>= of(null)
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.name = this.api.shareResponse.asObservable()
  }

}
