import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: String;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
  }

  getFeedsFromServer(): any {
    return this.http.get<myData>('http://localhost:5000/feed');
  }
}
