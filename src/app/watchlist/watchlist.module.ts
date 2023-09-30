import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesListModule } from '../movies-list/movies-list.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    MoviesListModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports:[]
})
export class WatchlistModule { }
