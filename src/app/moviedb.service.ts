import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  currentPage = new BehaviorSubject<Number>(1);
  page = 1;

  constructor( private http: HttpClient) { }

  search(word: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=da44568d803e8dacd78bc7dde023fe01&language=en-US&query=${word}&page=${this.currentPage}&include_adult=false`);
  }

  getNextPage(word: string, page: number) {
    // const updatedPage = this.page + 1;
    // this.page = updatedPage;
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=da44568d803e8dacd78bc7dde023fe01&language=en-US&query=${word}&page=${page}&include_adult=false`);
  }

}
