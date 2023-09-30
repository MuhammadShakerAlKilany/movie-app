import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from 'src/app/interfaces/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishMovieNumper:BehaviorSubject<number> = new BehaviorSubject(0)
  wishList:BehaviorSubject< Movie[]> = new BehaviorSubject<Movie[]>([])
  wishListCome:BehaviorSubject< boolean> = new BehaviorSubject<boolean>(false)
  constructor(private api:ApiService) { }
  upDateWishList(){
    this.api.getWatchlistByPageNumber().subscribe((data)=>{
      
      this.wishMovieNumper.next(data.results.length)
      

        this.wishList.next(data.results)
      this.wishListCome.next(true)

    })
    
  }
}
