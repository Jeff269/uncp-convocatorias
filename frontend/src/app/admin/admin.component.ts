import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import * as $ from 'jquery';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menuMin: boolean;
  menuActive: number;
  windowsX: number;
  windowsY: number;
  navX: number;
  navXmin: number;

  constructor(private router: Router, private auth: AuthService){ 
    this.menuMin = false;
    switch(this.router.url){
      case "/admin": this.menuActive = 1; break;
      case "/admin/filtro": this.menuActive = 2; break;
      case "/admin/dependencias": this.menuActive = 3; break;
      case "/admin/convocatorias": this.menuActive = 4; break;
      case "/admin/reportes": this.menuActive = 5; break;

      case "/admin/postulantes": this.menuActive = 7; break;
    }
  }

  ngOnInit(): void {
    this.resize();
    
    window.addEventListener("resize",()=>{
      this.resize();
    });

    //$("nav").css("width","40px")
  }


  valRouteActive(get_route){
    switch(get_route){
      case "/admin": this.menuActive = 1; break;
      case "filtro": this.menuActive = 2; break;
      case "dependencias": this.menuActive = 3; break;
      case "convocatorias": this.menuActive = 4; break;
      case "reportes": this.menuActive = 5; break;

      case "postulantes": this.menuActive = 7; break;
    }
  }

  minMenu(){
    if(this.menuMin){
      this.menuMin = false;
      if(this.windowsX<700){

      }else{
        $(".main-container section").css("padding-left","240px");
        $(".nav-min").css("width","240px");
        setTimeout(()=>{
          $(".main-container > nav").css("display","block");
          $(".nav-min").css("display","none");
        },300);
      }
      
    }else{
      this.menuMin = true;
      $(".main-container section").css("padding-left","50px");
      $(".nav-min").css("display","block");
      $(".main-container > nav").css("display","none");
      setTimeout(()=>{
        $(".nav-min").css("width","50px");
      },10);
    }
    

    
  }
 
  resize(){
    this.navX = $(".main-container > nav").outerWidth();
    this.navXmin = 50;
    this.windowsX = $(window).width();
    if(this.menuMin){
      if(this.windowsX<700){
        $(".btn_min_resp").css("visibility","hidden");
        this.minMenu()
      }else{
        $(".btn_min_resp").css("visibility","visible");
      }
    }else{
      if(this.windowsX<700){
        $(".btn_min_resp").css("visibility","hidden");
        this.minMenu()
      }else{
        $(".btn_min_resp").css("visibility","visible");
      }
    }
  }


  logout(){
    this.auth.logout();
  }

}
