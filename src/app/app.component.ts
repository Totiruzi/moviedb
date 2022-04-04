import { Component } from '@angular/core';
import { MoviedbService } from './moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieResults = [];
  constructor(private movieDb : MoviedbService) { }

  searchedMovie(movie: string) {
    const result = this.movieDb.search(movie).subscribe((data: any) => {
      this.movieResults = data.results;
    });
  }
}
