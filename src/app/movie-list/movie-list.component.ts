import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit {
  @Input() movieResults: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

}
