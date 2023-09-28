import { EventEmitter, Injectable } from '@angular/core';
import { RequestPage } from 'src/app/interfaces/request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationHomePageService {
  homePageArray:EventEmitter<RequestPage[]>=new EventEmitter() 
  homePage:EventEmitter<RequestPage>=new EventEmitter() 
  constructor( private api:ApiService) { }
  getPage(pageNumper:number){
    this.homePageArray.subscribe((PageArray)=>{
     const isFindPage = PageArray.find((page)=>{
          return page.page==pageNumper
      })
      if(!isFindPage){

        this.api.getAllMoviesPopularByPageNumber(pageNumper).subscribe((newPage)=>{
          PageArray.push(newPage)
          this.homePage.next(newPage)
        })
      }else{
        this.homePage.next(isFindPage)
      }
    })
  }
}
