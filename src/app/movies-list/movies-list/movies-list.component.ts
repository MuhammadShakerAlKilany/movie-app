import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationHomePageService } from 'src/app/shared/services/pagination-home-page.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{
  movies!: Movie[];
  imgSrc!: string;
  pageNumper!:number
  pageNumperToShow!:number

  constructor(private api: ApiService , private paginationHomePageService:PaginationHomePageService) { }
  ngOnInit() {
    // this.api.getAllMoviesPopularByPageNumber().subscribe((val) => {this.movies = val.results})
    if(!this.movies){
      this.paginationHomePageService.getPage()
    }
    this.paginationHomePageService.homePage.subscribe((data)=>{
      console.log("data")
      this.movies = data.results
      this.pageNumper = data.page
      this.pageNumperToShow = this.pageNumper
    })
    
  }
  createRange(number:number){
    return new Array(number).fill(0)
      .map((n, index) => index );
  }
  getPage(numPage:any,element:HTMLElement){
    this.paginationHomePageService.getPage(numPage)
    element.blur() 
  }
  nextPage(){
    this.pageNumperToShow +=1
  }
  previousPage(){
    this.pageNumperToShow -=1
  }

}
