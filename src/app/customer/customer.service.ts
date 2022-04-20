import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor(private _http: HttpClient) {}

  getUserList(size = 3) {
    const url = 'https://random-data-api.com/api/users/random_user';
    return this._http.get(url, { params: { size } });
  }
}
