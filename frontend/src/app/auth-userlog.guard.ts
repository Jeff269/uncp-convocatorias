import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {  AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthUserlogGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){

  }
  
  async canActivate(){
    //return true;
    await this.auth.intranet_validarLoginPromise().then(
      res => {
        console.log(res)
        if(res.code==300){
          return true;
        }else{
          if(res.code==200){
            //console.log(res)
            //console.log("token valido");
            this.router.navigate(['/intranet']);
            return false;
          }else{
            if(res.code==404){
              //console.log("token invalido");
              this.auth.intranet_removeToken();
              this.router.navigate(['/login']);
              //this.router.navigate(['/login.php']);
              return false;
            }else{
              console.log("error con la base de datos")
              this.auth.intranet_removeToken();
              this.router.navigate(['/login']);
              return false;
            }
          }
        }
        
        
      }
    );

    return true;
  }
  
}
