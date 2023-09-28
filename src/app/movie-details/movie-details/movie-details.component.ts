import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { MovieDetails } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  data!: MovieDetails;
  imagePoster!: string;
  id!: number;
  dropImage: string | undefined;
  constructor(private apiServ: ApiService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params["id"]
    this.apiServ.getMoviesById(this.id).subscribe((val) => {
      this.data = val;
      console.log(this.data);
      this.imagePoster = this.apiServ.getImgSrcByPosterPath(val.poster_path);
      this.dropImage = this.apiServ.getImgSrcByPosterPath(val.backdrop_path);
    });
  }
}
