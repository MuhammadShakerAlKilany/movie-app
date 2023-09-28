import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../interfaces/api';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/interfaces/movie';
import { RequestPage, RequestPageAddToWatchlist } from 'src/app/interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements Api {

  private accountId = 121950
 
  constructor(private httpClient:HttpClient) { 
    
  }
  
  getAllMoviesPopularByPageNumber(pageNumber: number=1): Observable<RequestPage> {
   return this.httpClient.get<RequestPage>(`https://api.themoviedb.org/3/movie/popular?page=${pageNumber}`)
  }
  getMoviesById(movieId: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${movieId}`)
  }
  getRecommendedMoviesByMovieId(movieId: number): Observable<RequestPage> {
    
    return this.httpClient.get<RequestPage>(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`)

  }
  getWatchlistByPageNumber(pageNumber: number=1): Observable<RequestPage> {
    return this.httpClient.get<RequestPage>(`https://api.themoviedb.org/3/account/${this.accountId}/watchlist/movies?page=${pageNumber}`)
  }
  addToWatchlistByMovieId(movieId: number): Observable<RequestPageAddToWatchlist> {
    const body = {
      "media_type": "movie",
  "media_id": movieId, 
  "watchlist": true
  }
     
     return this.httpClient.post<RequestPageAddToWatchlist>(`https://api.themoviedb.org/3/account/${this.accountId}/watchlist`,body)
    }
    removeFromWatchlistByMovieId(movieId: number): Observable<RequestPageAddToWatchlist> {
      const body = {
        media_type: "movie",
    media_id: movieId, 
    watchlist: false
    }
       
       return this.httpClient.post<RequestPageAddToWatchlist>(`https://api.themoviedb.org/3/account/${this.accountId}/watchlist`,body)
    }
    getImgSrcByPosterPath(PosterPath: string):string {
      return `https://image.tmdb.org/t/p/w500/${PosterPath}`
    }
    searchByMovieName(movieName: string): Observable<RequestPage> {
    return this.httpClient.get<RequestPage>(`https://api.themoviedb.org/3/search/movie?query=${movieName}`)
  }
  
}
