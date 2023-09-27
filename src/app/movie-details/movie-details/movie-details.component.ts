import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { MovieDetails } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class  MovieDetailsComponent implements  OnInit {
  data!: MovieDetails ;
  imagePoster!:string;
  id!:number;
  constructor(private apiServ: ApiService){}
  ngOnInit(){
    this.id = this.apiServ.snapshot.params["id"]
    this.apiServ.getMoviesById(this.id).subscribe((val) =>{this.data = val
      this.imagePoster = this.apiServ.getImgSrcByPosterPath(val.poster_path)
    } 
    )
  }
}
