import { MovieSearchResult } from './movieSearchResult.interface';


export interface SearchMovieResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieSearchResult[];
}