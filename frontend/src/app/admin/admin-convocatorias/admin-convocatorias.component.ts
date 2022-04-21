import { Component, OnInit } from '@angular/core';
import { DependenciasService } from "./../../services/dependencias.service";
import { CertificadosService } from "./../../services/certificados.service";
import { ToastrService } from 'ngx-toastr';

import { Dependencia } from "./../../models/dependencia.model";
import { Certificado } from 'src/app/models/certificado.model';

import * as $ from 'jquery';
declare var $: any;

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-admin-convocatorias',
  templateUrl: './admin-convocatorias.component.html',
  styleUrls: ['./admin-convocatorias.component.css']
})
export class AdminConvocatoriasComponent implements OnInit {

  dependencias: Dependencia[];
  dependencia: Dependencia;
  certificados: Certificado[];
  certificado: Certificado;

  file: File;
  fileExtension: string;

  ready: boolean;
  btn: boolean;
  pages;
  pageActive: number;
  pageSize: number;

  constructor(private service: CertificadosService, private toastr: ToastrService) { 
    this.certificados = [];
    this.certificado = new Certificado();
    this.btn = true;
    this.ready = false;
    this.pageActive = 1;
    this.pageSize = 30;
    this.paginar();
  }

  ngOnInit(): void {

  }


  resetForm(getForm){
    getForm.resetForm();
    this.certificado = new Certificado();
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    $("#modal-add-csv").modal('hide');
    getForm.resetForm();
    this.certificado = new Certificado();
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
        this.getData(this.pageActive);
      },
      err => {console.log(err)}
    );
  }


  
  getData(page: number){
    this.ready = false;
    this.pageActive = page;
    try{
      this.service.getData(this.pages[page-1]).subscribe(
        res=>{
          //console.log(res)
          this.ready = true;
          this.certificados = res;
        },
        err=>{
          console.log(err)
          this.ready = true;
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getData(this.pages[page-2]).subscribe(
        res=>{
          this.ready = true;
          this.certificados = res;
        },
        err=>{
          this.ready = true;
        }
      );
    }
 
  }

  edit(getElement: Certificado){
    this.certificado = Object.assign({},getElement);
  }

  submit(getForm){
    if(this.certificado.id){ 
      this.btn = false;
      this.service.putData(this.certificado).subscribe(
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
        this.service.postData(this.certificado).subscribe(
          (res) => {
            if(res==200){
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
      this.service.getDataFilter(index,type).subscribe(
        res =>{
          this.ready = true;
          this.certificados = res;
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
      this.certificado = Object.assign({},getElement);
    }else{
      this.btn = false;
      this.service.deleteData(this.certificado).subscribe(
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
