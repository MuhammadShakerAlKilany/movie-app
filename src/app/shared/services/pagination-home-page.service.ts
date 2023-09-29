import { EventEmitter, Injectable } from '@angular/core';
import { RequestPage } from 'src/app/interfaces/request';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationHomePageService {
  homePageArray=new BehaviorSubject<RequestPage[]>([]) 
  homePage=new BehaviorSubject<RequestPage>(null!) 
  constructor( private api:ApiService) { }
  getPage(pageNumper:number=1){
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
