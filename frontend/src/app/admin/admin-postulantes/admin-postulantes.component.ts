import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CertificadosService } from "./../../services/certificados.service";
import { ParticipantesService } from "./../../services/participantes.service";

import { Certificado } from "./../../models/certificado.model";
import { Participante } from "./../../models/participante.model";

import { ActivatedRoute, Router } from "@angular/router";

import * as $ from 'jquery';
declare var $: any;

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-admin-postulantes',
  templateUrl: './admin-postulantes.component.html',
  styleUrls: ['./admin-postulantes.component.css']
})
export class AdminPostulantesComponent implements OnInit {

  certificados: Certificado[];
  certificado: Certificado;
  participantes: Participante[];
  participante: Participante;

  file: File;
  fileExtension: string;

  ready: boolean;
  btn: boolean;
  pages;
  pageActive: number;
  pageSize: number;

  constructor(
    private certificados_service: CertificadosService, 
    private service: ParticipantesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService){ 

    this.certificados = [];
    this.certificado = new Certificado();
    this.participantes = [];
    this.participante = new Participante();

    this.btn = true;
    this.ready = false;
    this.pageActive = 1;
    this.pageSize = 40;
    this.pages = [0];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.certificado.id = params['id'];
      this.getDataCertificado();
      this.paginar();
    })
  }


  resetForm(getForm){
    getForm.resetForm();
    this.participante = new Participante();
    this.participante.codigo = this.certificado.codigo+'-00000-'+this.certificado.year;
    this.fileExtension = null;
    this.file = null;
    $("#input-file-modal").val('');
  }

  closeForm(getForm){
    $("#modal-add").modal('hide');
    $("#modal-add-csv").modal('hide');
    getForm.resetForm();
    this.participante = new Participante();
    this.participante.codigo = this.certificado.codigo+'-00000-'+this.certificado.year;
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
    this.service.getPages(this.pageSize, this.certificado).subscribe(
      res => {
        this.pages = res;
        //console.log(this.pages)
        this.getData(this.pageActive);
      },
      err => {console.log(err)}
    );
  }


  getDataCertificado(){
    try{
      this.certificados_service.getDataFilterId(this.certificado.id).subscribe(
        res=>{
          //console.log(res)
          this.ready = true;
          this.certificado = res;
        },
        err=>{
          console.log(err)
          this.ready = true;
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.certificados_service.getDataFilterId(this.certificado.id).subscribe(
        res=>{
          this.ready = true;
          this.certificado = res;
        },
        err=>{
          this.ready = true;
        }
      );
    }
 
  }


  getData(page: number){
    this.ready = false;
    this.pageActive = page;
    try{
      this.service.getData(this.pages[page-1], this.certificado).subscribe(
        res=>{
          //console.log(res)
          this.ready = true;
          this.participantes = res;
        },
        err=>{
          console.log(err)
          this.ready = true;
        }
      );
    }catch(error){
      console.log(error);
      this.pageActive -= 1;
      this.service.getData(this.pages[page-2], this.certificado).subscribe(
        res=>{
          this.ready = true;
          this.participantes = res;
        },
        err=>{
          this.ready = true;
        }
      );
    }
 
  }


  edit(getElement: Participante){
    this.participante = Object.assign({},getElement);
    //console.log(this.tipo_resp)
  }

  
  submit(getForm){
    if(this.participante.id){ 
      this.btn = false;
      this.service.putData(this.participante).subscribe(
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
        this.service.postData(this.participante, this.certificado).subscribe(
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
      this.service.getDataFilter(index, type, this.certificado).subscribe(
        res =>{
          console.log(res)
          this.ready = true;
          this.participantes = res;
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
      this.participante = Object.assign({},getElement);
    }else{
      this.btn = false;
      this.service.deleteData(this.participante).subscribe(
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
      this.service.postImport(this.file, this.certificado).subscribe(
        (res) => { 
          //console.log(res)
          if(res.state==200){  
            this.toastr.success(res.result+' Elementos importados con exito.','Aviso');
            this.pageActive = 1;
            this.paginar();
            setTimeout(()=>{
              this.btn = true;
              this.file = null;
              this.fileExtension = null;
              this.closeForm(getForm);
            },300);
          }else{
            if(res.state==302){
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



  changeNumberParticipante(){
    switch(true){
      case parseInt(this.participante.nro) < 10: 
          this.participante.codigo = this.certificado.codigo+'-0000'+this.participante.nro+'-'+this.certificado.year;
          break;
      case parseInt(this.participante.nro) < 100: 
          this.participante.codigo = this.certificado.codigo+'-000'+this.participante.nro+'-'+this.certificado.year;
          break;
      case parseInt(this.participante.nro) < 1000: 
          this.participante.codigo = this.certificado.codigo+'-00'+this.participante.nro+'-'+this.certificado.year;
          break;
      case parseInt(this.participante.nro) < 10000: 
          this.participante.codigo = this.certificado.codigo+'-0'+this.participante.nro+'-'+this.certificado.year;
          break;
      case parseInt(this.participante.nro) < 100000: 
          this.participante.codigo = this.certificado.codigo+'-'+this.participante.nro+'-'+this.certificado.year;
          break;
      default:
          this.participante.codigo = this.certificado.codigo+'-'+this.participante.nro+'-'+this.certificado.year;
          break;
    }
  }

}
