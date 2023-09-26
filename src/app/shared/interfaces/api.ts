import { Observable } from "rxjs";
import { Movie, MovieDetails } from "src/app/interfaces/movie";
import { RequestPage, RequestPageAddToWatchlist } from "src/app/interfaces/request";

export interface Api {
    getAllMoviesPopularByPageNumber(pageNumber:number):Observable<RequestPage>,
    getMoviesById(movieId:number):Observable<MovieDetails>,
    getRecommendedMoviesByMovieId(movieId:number):Observable<RequestPage>,
    getWatchlistByPageNumber(pageNumber:number):Observable<RequestPage>,
    addToWatchlistByMovieId(movieId:number):Observable<RequestPageAddToWatchlist>,
    removeFromWatchlistByMovieId(movieId:number):Observable<RequestPageAddToWatchlist>,
    getImgSrcByPosterPath(PosterPath:string):string

}

