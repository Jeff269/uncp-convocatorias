import { Component, OnInit } from '@angular/core';
import { FiltroService } from "./../../services/filtro.service";
import { ToastrService } from 'ngx-toastr';

import { Usuario } from "./../../models/usuario.model";

import * as $ from 'jquery';
declare var $: any;

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-admin-filtro',
  templateUrl: './admin-filtro.component.html',
  styleUrls: ['./admin-filtro.component.css']
})
export class AdminFiltroComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;

  file: File;
  fileExtension: string;

  ready: boolean;
  btn: boolean;
  pages;
  pageActive: number;
  pageSize: number;

  constructor(private service: FiltroService, private toastr: ToastrService) { 
    this.usuarios = [];
    this.usuario = new Usuario();
    this.btn = true;
    this.ready = false;
    this.pageActive = 1;
    this.pageSize = 20;
    this.paginar();
  }


  ngOnInit(): void {
  }


  resetForm(getForm){
    getForm.resetForm();
    this.usuario = new Usuario();
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    $("#modal-add-csv").modal('hide');
    getForm.resetForm();
    this.usuario = new Usuario();
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
    return false;
  }

  closeConfirm(){
    $("#modal-confirm").modal('hide');
  }


  selectedFile(event){
    event.stopPropagation();
    return false;
  }

  seleccionFile(event: any):void{
    this.file =null;
    this.fileExtension = null;
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      this.fileExtension = this.file.name.split('.').pop();
      
    }
  }

  eliminarFile(event){
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
    event.stopPropagation();
    return false;
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
      this.service.getUsuarios(this.pages[page-1]).subscribe(
        res=>{
          this.ready = true;
          this.usuarios = res;
        },
        err=>{
          this.ready = true;
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getUsuarios(this.pages[page-2]).subscribe(
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
      this.service.putUsuario(this.usuario).subscribe(
        (res) => {
          if(res==200){
            this.toastr.success('Elemento actualizado con exito.','Aviso');
            this.paginar();
            setTimeout(()=>{
              this.btn = true;
              this.closeForm(getForm);
            },300);
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
    }else{
      
        this.btn = false;
        this.service.postUsuario(this.usuario).subscribe(
          (res) => {
            if(res==200){
              this.btn = true;
              this.toastr.success('Elemento registrado con exito.','Aviso');
              this.pageActive = 1;
              this.paginar();
              setTimeout(()=>{
                this.btn = true;
                this.closeForm(getForm);
              },300);
            }else{
              this.btn = true;
              this.toastr.error('No se pudo actualizar el elemento.','Aviso');
            }     
          },
          (err) => {
            console.log(err);
            this.btn = true;
            this.toastr.error('No se pudo registrar el elemento.','Aviso');
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
      this.service.getUsuariosFilter(index,type).subscribe(
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


  eliminar(getElement: any){  
    if(getElement.id){
      this.btn = true;
      this.usuario = Object.assign({},getElement);
    }else{
      this.btn = false;
      this.service.deleteData(this.usuario).subscribe(
        res => {
          if(res==200){
            this.btn = true;
            this.toastr.success('Elemento eliminado con exito.','Aviso');
            this.paginar();
            this.closeConfirm();
            setTimeout(()=>{
              this.btn = true;
            },300);
          }else{
            this.btn = true;
            this.toastr.error('No se pudo eliminar el elemento.','Aviso');
          }
        },
        err => {
          console.log(err);
          this.btn = true;
          this.toastr.error('No se pudo eliminar el elemento.','Aviso');
        }
      );
    }
  }


  importar(getForm){
    if(this.file){
      this.btn = false;
      this.service.postImport(this.file).subscribe(
        (res) => { 
          if(res==200){  
            this.toastr.success('Elementos importados con exito.','Aviso');
            this.pageActive = 1;
            this.paginar();
            setTimeout(()=>{
              this.btn = true;
              this.file = null;
              this.fileExtension = null;
              this.closeForm(getForm);
            },300);
          }else{
            if(res==302){
              this.btn = true;
              this.toastr.error('Error con la base de datos.','Aviso');
            }else{
              this.btn = true;
              this.toastr.warning('No se pudo leer el archivo.','Aviso');
            }
          }
        },
        (err) => {
          console.log(err)
          this.btn = true;
          this.toastr.error('No se pudo importar el archivo.','Aviso');
        }
      );
    }else{
      this.toastr.warning('No se selecciono ningun archivo.','Aviso');
    }
  }


}
