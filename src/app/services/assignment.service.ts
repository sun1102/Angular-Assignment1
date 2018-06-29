import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDetails } from '../Model/details';

@Injectable()
export class AssignmentService {
  private url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  
  constructor(private http: Http) { }

  getDetails(): Observable<any>{
   return this.http.get(this.url)
              .map(response => response.json());
  }
}
