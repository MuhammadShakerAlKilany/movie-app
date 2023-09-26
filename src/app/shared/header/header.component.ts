import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  faHeart=faHeart
  imgSrc!:string
  navbarCollapsed:boolean=true
  wishMovieNumper:number = 0
 constructor(private apiService:ApiService){

 }
 toggleNavbarCollapsing(){

  this.navbarCollapsed = !this.navbarCollapsed
 }
 toggleNavbarCollapsingWindowResize(event:any|undefined){
  if(event?.currentTarget.innerWidth>992){

    this.navbarCollapsed = true
  }
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
    this.apiService.getWatchlistByPageNumber().subscribe((data)=>{
     this.wishMovieNumper = data.results.length
    })
  //   this.apiService.addToWatchlistByMovieId(878976).subscribe((data)=>{
  //     console.log(data)
  // })
  //   this.apiService.removeFromWatchlistByMovieId(878976).subscribe((data)=>{
  //     console.log(data)
  // })
 this.imgSrc = this.apiService.getImgSrcByPosterPath("/a2lxHS6Au35k5XtFQEQW44yWHeH.jpg")
  }
 
}
