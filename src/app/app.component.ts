import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviedbService } from './moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  movieResults = [];
  subscriptions: Subscription[] = [];
  constructor(private moviedbService : MoviedbService) { }
  ngOnInit(): void {
    this.subscriptions.push(this.moviedbService.movieSearch.subscribe((searchedMovie: any) => {
      console.log("🚀 ~ file: app.component.ts ~ line 17 ~ AppComponent ~ this.subscriptions.push ~ searchedMovie", searchedMovie)
      this.subscriptions.push(this.moviedbService.search(searchedMovie).subscribe((movies: any) => {
        this.movieResults = movies.results;
        }));  
      }));
  }
  searchedMovie(movie: string) {
    this.moviedbService.search(movie)
    // .subscribe((data: any) => {
      // this.movieResults = data.results;
    // });
  }
}
