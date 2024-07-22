import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../Interfaces/BookInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url =`https://openlibrary.org/subjects/finance.json?details=true`;

  constructor(private http: HttpClient) {}

  getData(): Observable<Book>{
    return this.http.get<Book>(this.url).pipe(catchError(this.errorHandler));
    // return this.data
  }

  getAuthor(name :any){
    name=name.replaceAll(/\s+/g,'%20')
    return this.http.get(`https://openlibrary.org/search/authors.json?q=${name}`)
  }
  
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
}
