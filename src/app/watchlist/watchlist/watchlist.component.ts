import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  wishList!:Movie[];
  faHeartBroken=faHeartBroken
  wishListCome:boolean=false;
  notFoundMassage:string = "Not Found Movie in wish list"
  constructor(private wishListServ:WishListService){
    this.wishListServ.upDateWishList()

  }
  ngOnInit(): void {

    this.wishListServ.upDateWishList()
    this.wishListServ.wishList.subscribe((data)=>{
      this.wishList = data
    
    })
    this.wishListServ.wishListCome.subscribe((data)=> this.wishListCome = data)
  
  }
}
