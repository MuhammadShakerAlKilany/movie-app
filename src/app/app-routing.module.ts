import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list/movies-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details/movie-details.component';

const routes: Routes = [{path:"",component:MoviesListComponent},
{path:"details",component:MovieDetailsComponent},
{path:"**",component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
