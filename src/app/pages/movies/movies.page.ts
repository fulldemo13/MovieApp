import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService) { }

  ngOnInit() { }

  // Call our service function which returns an Observable
  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm);
  }
}
