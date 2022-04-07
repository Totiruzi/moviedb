import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MoviedbService } from '../moviedb.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  @Output() searchedMovie = new EventEmitter<string>();
  pageNumber: number = 1;
  constructor(private moviedbService: MoviedbService) { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    console.log("🚀 ~ file: movie-search.component.ts ~ line 19 ~ MovieSearchComponent ~ onFormSubmit ~ event", event)
    this.moviedbService.movieSearch.next(event.target.value);
    // this.searchedMovie.emit(this.moviedbService.movieSearch);
  }

  onInputChange(event: any) {
    const searchText = event.target.value
    // this.performeSearch(searchText);
    this.moviedbService.movieSearch.next(searchText);
  }

  performeSearch(searchText: any) {
    if (searchText.length > 2) {
    }
  }

  previousPage(event: any) { 
    console.log('Calling Previous Page Http Request')
    this.moviedbService.getPreviousPage();
  }

  nextPage(event: any) {
    console.log('Calling Next Page Http Request')
    this.moviedbService.getNextPage();
  }

}
