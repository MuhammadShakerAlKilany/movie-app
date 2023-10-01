import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { PaginationSearchPageService } from 'src/app/shared/services/pagination-search-page.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movieName:string=""
  searchResult!:Movie[]
  test=true
  total_pages!:number;
  numperPage!:number;
  notFoundMassage=`not found result`
  pageNumperToShow: number=1;
  pageNumper!: number;
  total_results!:number
  constructor(private activatedRoute:ActivatedRoute , private api:ApiService , private paginationSearchPageService:PaginationSearchPageService,private wishList:WishListService){
    this.activatedRoute.params.subscribe((params)=>{
        this.movieName = params["movie-name"]
        this.notFoundMassage = `not found result for "${this.movieName}"`
        this.api.searchByMovieName(this.movieName).subscribe((data)=>{
     
      this.searchResult = data.results
      this.searchResult = data.results
      this.pageNumper = data.page
      this.total_pages = data.total_pages
      this.numperPage = data.total_pages<3 ? data.total_pages : 3 
      this.total_results = data.total_results
      this.pageNumperToShow = this.pageNumper
      
    })
    
   })
  }
  
  ngOnInit(): void {
    this.wishList.upDateWishList()
    this.paginationSearchPageService.searchPage.subscribe((data)=>{
    // if(!data?.results){
      this.paginationSearchPageService.getPage(this.movieName)
    // }else{

      this.searchResult = data.results
      this.pageNumper = data.page
      this.total_pages = data.total_pages
      this.numperPage = data.total_pages<3 ? data.total_pages : 3 
      this.total_results = data.total_results
      this.pageNumperToShow = this.pageNumper
    // }
    })
  }
  createRange(){
    return new Array(this.numperPage).fill(0)
      .map((n, index) => index );
  }
  getPage(numPage:any,element:HTMLElement){
    this.paginationSearchPageService.getPage(this.movieName,numPage)
    element.blur() 
  }
  nextPage(){
    if(this.pageNumperToShow<this.total_pages){
      
      this.pageNumperToShow +=1
    }
  }
  previousPage(){
      this.pageNumperToShow -=1
    
  }

}
