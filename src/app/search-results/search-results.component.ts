import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchMovieResult } from '../models/movieSearchResults.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchResults: SearchMovieResult;

  // temporario
  movieNames = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.movieNames = [];
    if (this.searchResults && this.searchResults.results) {
      this.searchResults.results.forEach(element => {
        this.movieNames.push(element.title);
      });
    }

  }

}
