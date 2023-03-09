import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GarageService {
  readonly ApiUrl = 'http://localhost:8080';
  readonly EndPoint_Cars = '/cars';

  constructor(private httpClient: HttpClient) {}

  getCars() {
    return this.httpClient.get(this.ApiUrl + this.EndPoint_Cars);
  }
}
