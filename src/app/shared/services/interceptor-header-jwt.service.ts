import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHeaderJWTService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2IwNTVmNDg0ZjQ4OWY0MmM4YWRiZmM0NjVkMjJlNSIsInN1YiI6IjY1MTE0NzJhM2E0YTEyMDBmZjRmYTQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gk7Fzyg5kRihQVNWwShi0MfRsdXjhmGYIeXsXT_kgOI"
  const request = req.clone({headers:req.headers.set("Authorization",`Bearer ${token}`)})
    return next.handle(request)
  }
}
