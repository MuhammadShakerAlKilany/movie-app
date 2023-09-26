import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() cardItem !: Movie
  constructor(private router:Router,private api:ApiService){}

  ngOnInit() {

  }
   redirectToDetails(id: number) {
     this.router.navigate(['details', id]);
     console.log(id);
   }
   imgSrc(PosterPath: string) {
    return this.api.getImgSrcByPosterPath(PosterPath);
  }

}
