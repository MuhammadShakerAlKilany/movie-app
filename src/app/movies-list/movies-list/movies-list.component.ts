import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{
  movies!: Movie[];
  imgSrc!: string;

  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.getAllMoviesPopularByPageNumber().subscribe((val) => {this.movies = val.results
    })

  }


}
