import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id: number = +route.url[1].path;
    if(isNaN(id) || id <= 0){
        alert('UNkOWN HOTEL')
        this.router.navigate(['/hotels'])
        return false;
    }
      return true;
  }

}
