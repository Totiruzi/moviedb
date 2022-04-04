import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviedbService } from '../moviedb.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  @Output() searchedMovie = new EventEmitter<string>();
  movie = '';
  pageNumber: number = 1;
  constructor(private moviedbService: MoviedbService) { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.searchedMovie.emit(this.movie);
  }

  onInputChange(event: any) {
    this.movie = event.target.value;
  }

  previousPage(event: any) {}

  nextPage(event: any) {
    this.pageNumber++;
    console.log(this.pageNumber);
    // this.moviedbService.getNextPage(this.movie);
  }

}
