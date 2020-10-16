import { Component, OnInit } from '@angular/core';
import { SearchMovieResult } from '../models/movieSearchResults.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchResults: SearchMovieResult;

  constructor() { }

  ngOnInit() {
  }

  getSearchResults(searchResult: SearchMovieResult) {
    this.searchResults = searchResult;
  }

}
