import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomingService {

  constructor(private http: HttpClient) { }

  getIncoming() {
    return this.http.get('http://localhost:3000/incoming/');
  }



}
