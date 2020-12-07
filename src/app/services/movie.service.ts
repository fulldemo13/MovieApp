import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://www.omdbapi.com/';
  apiKey = 'f60d1d34';

  /**
   * Constructor of the Service with Dependency Injection
   * @param https The standard Angular HttpsClient to make requests
   */
  constructor(private https: HttpClient) { }

  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * @param {string} title Search Term
  * @returns Observable with the search results
  */
  searchData(title: string): Observable<any> {
    return this.https.get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  /**
  * Get the detailed information for an ID using the "i" parameter
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return this.https.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
