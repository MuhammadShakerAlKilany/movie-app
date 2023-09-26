import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListModule } from './movies-list/movies-list.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorHeaderJWTService } from './shared/services/interceptor-header-jwt.service';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesListModule,
    MovieDetailsModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule,
    SearchModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:InterceptorHeaderJWTService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
