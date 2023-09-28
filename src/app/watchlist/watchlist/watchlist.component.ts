import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  wishList!:Movie[];
  notFoundMassage:string = "Not found Movie in wish list"
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
    this.apiService.getWatchlistByPageNumber().subscribe((data)=>{
      this.wishList = data.results
     })
  }
}
