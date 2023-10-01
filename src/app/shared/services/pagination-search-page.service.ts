import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { RequestPage } from 'src/app/interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class PaginationSearchPageService {
  searchPageArray=new BehaviorSubject<RequestPage[]>([]) 
  searchPage=new BehaviorSubject<RequestPage>(null!)
  constructor( private api:ApiService) { }
  getPage(movieName:string,pageNumper:number=1){
    this.searchPageArray.subscribe((PageArray)=>{
        const isFindPage = PageArray.find((page)=>{
          return page.page==pageNumper
        })
      if(!isFindPage){
        this.api.searchByMovieName(movieName,pageNumper).subscribe((newPage)=>{
          console.log(newPage)
          PageArray.push(newPage)
          this.searchPage.next(newPage)
        })
      }else{
        this.searchPage.next(isFindPage)
      }
    })
  }
}
