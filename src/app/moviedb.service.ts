import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  movieSearch = new BehaviorSubject('') ;
  private _currentPage$ = new BehaviorSubject<number>(1);
  public get currentPage() {
    return this._currentPage$.getValue();
  }
  public set currentPage(pageNumber: number) {
    this._currentPage$.next(pageNumber);
  }
  movie = '';

  constructor( private http: HttpClient) { }

  search(searchWord: string, currentPage: number = 1) {
    this.movie = searchWord;
    if(currentPage) this.currentPage = currentPage;
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=da44568d803e8dacd78bc7dde023fe01&language=en-US&query=${searchWord}&page=${this.currentPage}&include_adult=false`);
  }

  getNextPage() {
    this.currentPage = this.currentPage + 1;
    this.search(this.movie, this.currentPage);
    // return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=da44568d803e8dacd78bc7dde023fe01&language=en-US&query=${this.movie}&page=${this.currentPage}&include_adult=false`);
  }

}
