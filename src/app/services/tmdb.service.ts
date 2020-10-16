import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PrivateConstants } from '../constants/privateConstants';
import { SearchMovieResult } from '../models/movieSearchResults.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'https://api.themoviedb.org/3/';
  private readonly searchMoviePath = 'search/movie';


  constructor(private http: HttpClient,
              private constants: PrivateConstants) { }

  searchMovie(name: string): Observable<SearchMovieResult> {
    const query = this.URL + this.searchMoviePath + '?' + 'api_key=' + this.constants.key + '&query=' + name;
    return this.http.get(query).pipe(map((data: SearchMovieResult) => {
      return data;
    }), catchError( error => {
      return throwError( 'Something went wrong!' );
    }));
  }
}
