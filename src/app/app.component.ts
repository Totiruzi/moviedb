import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { MoviedbService } from './moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  movieResults = [];
  // subscriptions: Subscription[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.moviedbService.movieSearch.pipe(
      switchMap((movie: string) => this.moviedbService.searchForMovies() || [])
    ).subscribe((moviesResult: any) => {
      console.log("🚀 ~ file: app.component.ts ~ line 18 ~ AppComponent ~ this.subscriptions.push ~ movies", moviesResult)
        this.movieResults = moviesResult?.results ?? [];
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
