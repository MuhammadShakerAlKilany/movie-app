import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from 'src/app/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishMovieNumper:EventEmitter<number> = new EventEmitter()
  wishList:EventEmitter<Movie[]> = new EventEmitter()
  constructor(private api:ApiService) { }
  upDateWishList(){
    this.api.getWatchlistByPageNumber().subscribe((data)=>{
      
      this.wishMovieNumper.next(data.results.length)
      this.wishList.next(data.results)

    })
    
  }
}
