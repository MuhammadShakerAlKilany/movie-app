import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  wishList!:Movie[];
  notFoundMassage:string = "Not found Movie in wish list"
  constructor(private wishListServ:WishListService){}
  ngOnInit(): void {
    this.wishListServ.upDateWishList()
    this.wishListServ.wishList.subscribe((data)=>{
      console.log(data)
      this.wishList = data
     })
  }
}
