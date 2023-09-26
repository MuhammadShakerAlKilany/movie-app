import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list/movies-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details/movie-details.component';
import { SearchComponent } from './search/search/search.component';
import { WatchlistComponent } from './watchlist/watchlist/watchlist.component';

const routes: Routes = [{path:"",component:MoviesListComponent},
{path:"watchlist",component:WatchlistComponent},
{path:"details/:id",component:MovieDetailsComponent},
{path:"search/:movie-name",component:SearchComponent},
{path:"**",component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
