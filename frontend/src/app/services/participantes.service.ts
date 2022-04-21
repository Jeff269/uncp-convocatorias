import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constans';
import { Usuario } from "./../models/usuario.model";

import { Participante } from "./../models/participante.model";

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  URI = GlobalConstants.apiURL;

  constructor(private http:HttpClient) { }

  getToken(){
    return localStorage.getItem('access_token');
  }

  getPages(size, certificado){
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('id', certificado.id);
    return this.http.get<[]>(this.URI+'participantes/paginar.php',{params: params});
  }

  getData(index, certificado){
    let params = new HttpParams();
    if(index!=0){
      params = params.append('size', index.size);
      params = params.append('offset', index.offset);
    }
    params = params.append('id', certificado.id);
    return this.http.get<[]>(this.URI+'participantes/listar.php',{params: params});
  }


  getDataFilter(index: string, type: string, certificado){
    let params = new HttpParams();
    params = params.append('index', index);
    params = params.append('type', type);
    params = params.append('id', certificado.id);
    return this.http.get<[]>(this.URI+'participantes/buscar.php',{params: params});
  }

  postData(get_data: Participante, certificado){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    form_data.append('id',certificado.id);
    return this.http.post(this.URI+'participantes/registrar.php',form_data);
  }

  putData(get_data: Participante){
    //console.log(marcar);
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    return this.http.post(this.URI+'participantes/editar.php',form_data);
  }

  deleteData(get_data: Participante){
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('data',JSON.stringify(get_data));
    return this.http.post(this.URI+'participantes/eliminar.php',form_data);
  }

  postImport(file, certificado){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('file', file);
    form_data.append('data',JSON.stringify(certificado));
    return this.http.post<any>(this.URI+'participantes/importar.php',form_data);
  }

}
