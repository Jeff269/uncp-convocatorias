import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constans';
import { Usuario } from "./../models/usuario.model";
import { Dependencia } from "./../models/dependencia.model";
import { Certificado } from "./../models/certificado.model";


@Injectable({
  providedIn: 'root'
})
export class CertificadosService {

  URI = GlobalConstants.apiURL;

  constructor(private http:HttpClient) { }

  getToken(){
    return localStorage.getItem('access_token');
  }

  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'convocatorias/paginar.php',{params: params});
  }

  getData(index){
    let params = new HttpParams();
    if(index!=0){
      params = params.append('size', index.size);
      params = params.append('offset', index.offset);
    }
    return this.http.get<Certificado[]>(this.URI+'convocatorias/listar.php',{params: params});
  }

  getDataFilterWeb(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<any>(this.URI+'convocatorias/buscar_web.php',{params: params});
  }

  getDataFilter(index: string, type: string){
    let params = new HttpParams();
    params = params.append('index', index);
    params = params.append('type', type);
    return this.http.get<[]>(this.URI+'convocatorias/buscar.php',{params: params});
  }

  getDataFilterId(index: string){
    let params = new HttpParams();
    params = params.append('index', index);
    return this.http.get<Certificado>(this.URI+'convocatorias/buscar_id.php',{params: params});
  }

  postData(get_data: Certificado){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    return this.http.post(this.URI+'convocatorias/registrar.php',form_data);
  }

  putData(get_data: Certificado){
    //console.log(marcar);
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    return this.http.post(this.URI+'convocatorias/editar.php',form_data);
  }

  deleteData(get_data: Certificado){
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    return this.http.post(this.URI+'convocatorias/eliminar.php',form_data);
  }

  postImport(file){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('file', file);
    return this.http.post(this.URI+'convocatorias/importar.php',form_data);
  }

}
