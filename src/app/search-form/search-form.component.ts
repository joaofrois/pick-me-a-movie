import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TmdbService } from '../services/tmdb.service';
import { Output, EventEmitter } from '@angular/core';
import { SearchMovieResult } from '../models/movieSearchResults.interface';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() searchResults = new EventEmitter<SearchMovieResult>();


  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private tmdbService: TmdbService

  ) { }

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      name: []

    }
    );
  }

  searchSubmit() {
    this.tmdbService.searchMovie(this.searchForm.value.name).subscribe((response) => {
      this.SearchResults(response);
    });
  }

  SearchResults(response: SearchMovieResult) {
    this.searchResults.emit(response);

  }

}
