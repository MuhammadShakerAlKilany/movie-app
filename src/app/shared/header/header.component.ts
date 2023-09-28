import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Router } from '@angular/router';
import { WishListService } from '../services/wish-list.service';
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
  searchVal:string = ""
 constructor(private WishList:WishListService,private router : Router){
   
}
ngOnInit(): void {
  this.WishList.upDateWishList()
  this.WishList.wishMovieNumper.subscribe((wishMovieNumper)=>{

   this.wishMovieNumper = wishMovieNumper
  })

}

 toggleNavbarCollapsing(){

  this.navbarCollapsed = !this.navbarCollapsed
 }
 toggleNavbarCollapsingWindowResize(event:any|undefined){
  if(event?.currentTarget.innerWidth>992){

    this.navbarCollapsed = true
  }
 }
 search(){
 this.router.navigate(["/search",this.searchVal])   
 
 }

 
}
