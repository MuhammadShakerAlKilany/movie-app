import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movieName:string=""
  searchResult!:Movie[]
  test=true
  notFoundMassage=`not found result`
  constructor(private activatedRoute:ActivatedRoute , private api:ApiService){
    this.activatedRoute.params.subscribe((params)=>{
        this.movieName = params["movie-name"]
        this.notFoundMassage = `not found result for "${this.movieName}"`
        this.api.searchByMovieName(this.movieName).subscribe((data)=>{
      console.log( data.results.length)
      this.searchResult = data.results
      
    })
   })
  }
  
  ngOnInit(): void {
    
  }
}
