import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, of, tap } from 'rxjs';

export interface MoviesReponse {
  page: number; 
  results: Object[];
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  movieSearch = new BehaviorSubject('');
  pageObject: MoviesReponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  };
  private _currentPage$ = new BehaviorSubject<number>(1);
  public get currentPage() {
    return this._currentPage$.getValue();
  }
  public set currentPage(pageNumber: number) {
    this._currentPage$.next(pageNumber);
  }
  movie = '';

  constructor(private http: HttpClient) { }

  searchForMovies() {
    this.movie = this.movieSearch.getValue()
    let currentPage = this._currentPage$.getValue();
    console.log("🚀 ~ file: moviedb.service.ts ~ line 24 ~ MoviedbService ~ searchForMoviess ~ currentPage", currentPage, this.movie)
    
    if (this.movie?.length > 3) {
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=da44568d803e8dacd78bc7dde023fe01&language=en-US&query=${this.movie}&page=${currentPage}&include_adult=false`).pipe(
        tap((response: any ) => {
          const { page, results, total_pages, total_results } = response; 
          this.pageObject = { page, results, total_pages, total_results }}),
      );
    } 
    return of([]);
  }

  getPreviousPage() {
    let currentPage = this._currentPage$.getValue() -1;
    if(currentPage >= 1) {
      this.searchForNewPage(currentPage);
    }
  }

  getNextPage() {
    let currentPage = this._currentPage$.getValue() +1;
    if(currentPage <= this.pageObject.total_pages) {
      this.searchForNewPage(currentPage);
    }
  }

  private searchForNewPage(currentPage: number) {
    let currSearch = this.movieSearch.getValue();
    this._currentPage$.next(currentPage);
    console.log('Calling Search for Next Page Http Request - pageNumber: ',
      currentPage);
    this.movieSearch.next(currSearch);
    this.searchForMovies();
  }
}
