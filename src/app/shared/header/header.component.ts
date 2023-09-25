import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  imgSrc!:string
 constructor(private apiService:ApiService){

 }
  ngOnInit(): void {
    // this.apiService.getAllMoviesPopularByPageNumber(2).subscribe((data)=>{
    //     console.log(data)
    // })
    // this.apiService.getMoviesById(878976).subscribe((data)=>{
    //     console.log(data)
    // })
    // this.apiService.getRecommendedMoviesByMovieId(878976).subscribe((data)=>{
    //     console.log(data.results)
    // })
    // this.apiService.getWatchlistByPageNumber().subscribe((data)=>{
    //     console.log(data)
    // })
  //   this.apiService.addToWatchlistByMovieId(878976).subscribe((data)=>{
  //     console.log(data)
  // })
  //   this.apiService.removeFromWatchlistByMovieId(878976).subscribe((data)=>{
  //     console.log(data)
  // })
 this.imgSrc = this.apiService.getImgSrcByPosterPath("/a2lxHS6Au35k5XtFQEQW44yWHeH.jpg")
  }
 
}
