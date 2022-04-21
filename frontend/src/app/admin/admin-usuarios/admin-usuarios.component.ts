import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "./../../services/usuarios.service";
import { ToastrService } from 'ngx-toastr';

import { Usuario } from "./../../models/usuario.model";

import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;

  ready: boolean;
  btn: boolean;
  pages;
  pageActive: number;
  pageSize: number;

  constructor(private service: UsuariosService, private toastr: ToastrService) { 
    this.usuarios = [];
    this.usuario = new Usuario();
    this.btn = true;
    this.ready = false;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
    this.getDependencias();
  }

  ngOnInit(): void {
    
  }


  resetForm(getForm){
    getForm.resetForm();
    this.usuario = new Usuario();
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    getForm.resetForm();
    this.usuario = new Usuario();
  }


  paginar(){
    this.ready = false;
    this.service.getPages(this.pageSize).subscribe(
      res => {
        //console.log(res)
        this.pages = res;
        this.getUsuarios(this.pageActive);
      },
      err => {console.log(err)}
    );
  }


  getUsuarios(page: number){
    this.ready = false;
    this.pageActive = page;
    try{
      this.service.getData(this.pages[page-1]).subscribe(
        res=>{
          this.ready = true;
          this.usuarios = res;
        },
        err=>{
          this.ready = true;
          console.log(err)
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getData(this.pages[page-2]).subscribe(
        res=>{
          this.ready = true;
          this.usuarios = res;
        },
        err=>{
          this.ready = true;
        }
      );
    }
 
  }


  edit(getElement: Usuario){
    this.usuario = Object.assign({},getElement);
  }

  
  submit(getForm){
    if(this.usuario.id){ 
      this.btn = false;
      this.service.putData(this.usuario).subscribe(
        (res) => {
          if(res==200){
            this.toastr.success('Elemento actualizado con exito.','Aviso');
            this.paginar();
            setTimeout(()=>{
              this.btn = true;
              this.closeForm(getForm);
            },200);
          }else{
            this.btn = true;
            this.toastr.error('No se pudo actualizar el elemento.','Aviso');
          }
        },
        (err) => {
          console.log(err);
          this.btn = true;
          this.toastr.error('No se pudo actualizar el elemento.','Aviso');
        }
      );
    }
  }


  filtrar(index: string, type: string){
    this.pageActive = 1;
    if(index==""){
      this.paginar();
    }else{
      this.ready = false;
      this.service.getDataFilter(index,type).subscribe(
        res =>{
          this.ready = true;
          this.usuarios = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }


  getDependencias(){
    /*
      this.service_dependencias.getData(0).subscribe(
        res=>{
          this.dependencias = res;
        },
        err=>{
          console.log(err)
        }
      );
      */
  }

}
