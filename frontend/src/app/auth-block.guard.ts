import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {  AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthBlockGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){

  }
  
  async canActivate(){
    //return true;
    await this.auth.validarLoginPromise().then(
      res => {
        //console.log(res)
        if(res.code==300){
          return true;
        }else{
          if(res.code==200){
            //console.log(res)
            //console.log("token valido");
            this.router.navigate(['/']);
            return false;
          }else{
            if(res.code==404){
              //console.log("token invalido");
              this.auth.removeToken();
              window.location.href = '/login.php';
              //this.router.navigate(['/login.php']);
              return false;
            }else{
              console.log("error con la base de datos")
              this.auth.removeToken();
              window.location.href = '/login.php';
              return false;
            }
          }
        }
        
        
      }
    );

    return true;
  }
  
}
