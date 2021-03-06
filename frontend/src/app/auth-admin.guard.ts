import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {  AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){

  }
  
  async canActivate(){
    return true;
    await this.auth.validarLoginPromise().then(
      res => {
        //console.log(res)
        if(res.code==200 && res.privilegios==1){
          //console.log(res)
          //console.log("acceso autorizado");
          return true;
        }else{
          if(res.code==200 && res.privilegios==0){
            //console.log("acceso denegado");
            this.router.navigate(['/']);
            return false;
          }else{
            if(res.code==300){
              this.router.navigate(['/unauthorized']);
              return false;
            }else{
              console.log("Error al identificar usuario")
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

  canActivateChild(){
    return true;
  }
  
}
