import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() cardItem !: Movie
  findElementInShowList!:boolean|string

  constructor(private router:Router,private api:ApiService ,private wishList:WishListService ){
    
  }

  ngOnInit() {
    
    this.wishList.wishList.subscribe((data)=>{
     const movieFind = data.find((e:Movie)=>{
       return e.id === this.cardItem.id 
      }) 
      
      if(movieFind){
       
        this.findElementInShowList =true
      }else{
       this.findElementInShowList = false
      }
      
    });
  }
   redirectToDetails(id: number) {
     this.router.navigate(['details', id]);
   
   }
   imgSrc(PosterPath: string) {
    return this.api.getImgSrcByPosterPath(PosterPath);
  }
  addOrRemoveFromWishList(){

    if(this.findElementInShowList){
      this.api.removeFromWatchlistByMovieId(this.cardItem.id).subscribe((e)=>{

        this.wishList.upDateWishList()
      })
    }else{
      this.api.addToWatchlistByMovieId(this.cardItem.id).subscribe((e)=>{
        this.wishList.upDateWishList()
      });
    }
  }

}
