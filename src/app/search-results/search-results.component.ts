
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PublicConstants } from '../constants/publicConstants';
import { MovieSearchResult } from '../models/movieSearchResult.interface';
import { SearchMovieResult } from '../models/searchResults.interface';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchResults: SearchMovieResult;

  queryResults: MovieSearchResult[] = [];


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.queryResults = [];
    if (this.searchResults && this.searchResults.results) {
      this.searchResults.results.forEach(element => {
        this.queryResults.push(element);
      });
    }

  }

  getImgSrc(posterPath: string) {
    return PublicConstants.imgURL + posterPath;
  }

}
