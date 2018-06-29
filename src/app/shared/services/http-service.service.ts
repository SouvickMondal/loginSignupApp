import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpServiceService {

  constructor(private _http: HttpClient) { }

  saveData(data): Observable<any> {
    return this._http.post<any>('http://localhost:3000/save_data', {user: data}).pipe(
      catchError(err => throwError(err))
    );
  }
}
