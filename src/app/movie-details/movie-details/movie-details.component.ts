import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import {IconDefinition, faStar , faStarHalf} from "@fortawesome/free-solid-svg-icons"
import { MoviesListComponent } from 'src/app/movies-list/movies-list/movies-list.component';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  data!: MovieDetails;
  imagePoster!: string;
  id!: number;
  recomendArry!:Movie[]
  dropImage: string | undefined;
  show: boolean = true;
  findElementInShowList?:Movie 
  IsWishListCome:boolean=false;
  starRating:IconDefinition[]=[]
  constructor(private apiServ: ApiService, private activateRoute: ActivatedRoute , private wishList:WishListService ) {}
  addOrRemoveFromWishList(){
    if(this.findElementInShowList){
      this.apiServ.removeFromWatchlistByMovieId(this.id).subscribe((e)=>{

        this.wishList.upDateWishList()
      })
    }else{
      this.apiServ.addToWatchlistByMovieId(this.id).subscribe((e)=>{
        this.wishList.upDateWishList()
      });
    }
  }
  cardImage(path: string){
    return  this.apiServ.getImgSrcByPosterPath(path)
  }
  showMore(){
    this.show = !this.show
  }
  ngOnInit() {
    this.wishList.upDateWishList()
    this.wishList.wishList.subscribe((data)=>{
      this.findElementInShowList = data.find((e)=>{return e.id === this.id }) 
      this.IsWishListCome = true
      
    });
    this.id = Number(this.activateRoute.snapshot.params["id"]) 
    this.apiServ.getMoviesById(this.id).subscribe((val) => {
      this.data = val;
      for(let i=0 ; i <val.vote_average; i++ ){
        if(i+1>val.vote_average){
          this.starRating.push(faStarHalf)
          
        }else{
          this.starRating.push(faStar)
        }
       } 
      this.imagePoster = this.apiServ.getImgSrcByPosterPath(val.poster_path);
      this.dropImage = this.apiServ.getImgSrcByPosterPath(val.backdrop_path);
    });
    this.apiServ.getRecommendedMoviesByMovieId(this.id).subscribe((reco)=>{this.recomendArry = reco.results})
  }
  
}


