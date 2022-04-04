import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  @Output() searchedMovie = new EventEmitter<string>();
  movie = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.searchedMovie.emit(this.movie);
  }

  onInputChange(event: any) {
    this.movie = event.target.value;
  }

}
