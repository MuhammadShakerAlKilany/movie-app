import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movie';
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
  show: boolean = true;
  findElementInShowList?:Movie |boolean
  constructor(private apiServ: ApiService, private activateRoute: ActivatedRoute) {}
  addOrRemoveFromWishList(id:number){
    if(this.findElementInShowList){
      this.apiServ.removeFromWatchlistByMovieId(this.id).subscribe((e)=>{this.findElementInShowList = false})
    }else{
      this.apiServ.addToWatchlistByMovieId(this.id).subscribe((r)=>{this.findElementInShowList = true});
    }
  }
  showMore(){
    this.show = !this.show
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params["id"]
    this.apiServ.getWatchlistByPageNumber().subscribe((list)=>{this.findElementInShowList = list.results.find((e)=>{return e.id === this.id 
    }) 
  });
    this.apiServ.getMoviesById(this.id).subscribe((val) => {
      this.data = val;
      console.log(this.data);
      this.imagePoster = this.apiServ.getImgSrcByPosterPath(val.poster_path);
      this.dropImage = this.apiServ.getImgSrcByPosterPath(val.backdrop_path);
    });
    
  }
}
