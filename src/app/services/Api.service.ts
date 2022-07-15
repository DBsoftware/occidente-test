import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Irequest } from '../interfaces/request';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_PATH = environment.api_endpoint
  shareResponse = new BehaviorSubject<any>(null);

constructor(private http: HttpClient) { }



post(body: Irequest ={"nit":"800220154"}) {
  return this.http.post(this.API_PATH, body)
      .pipe(tap(({data}: any) => this.shareResponse.next(data)))
}

}
