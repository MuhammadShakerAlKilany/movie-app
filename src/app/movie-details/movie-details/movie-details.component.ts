import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

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
  findElementInShowList?:Movie 
  IsWishListCome:boolean=false
  constructor(private apiServ: ApiService, private activateRoute: ActivatedRoute , private wishList:WishListService) {}
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
      this.imagePoster = this.apiServ.getImgSrcByPosterPath(val.poster_path);
      this.dropImage = this.apiServ.getImgSrcByPosterPath(val.backdrop_path);
    });
    
  }
  
}
