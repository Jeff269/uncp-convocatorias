import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/global-constans';
import { Usuario } from "./../models/usuario.model";
import { Dependencia } from "./../models/dependencia.model";

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  URI = GlobalConstants.apiURL;

  constructor(private http:HttpClient) { }

  getToken(){
    return localStorage.getItem('access_token');
  }


  getPages(size){
    let params = new HttpParams();
    params = params.append('size', size);
    return this.http.get<[]>(this.URI+'filtro/paginar_usuarios.php',{params: params});
  }

  getUsuarios(index){
    let params = new HttpParams();
    params = params.append('size', index.size);
    params = params.append('offset', index.offset);
    return this.http.get<Usuario[]>(this.URI+'filtro/listar_usuarios.php',{params: params});
  }


  getUsuariosFilter(index: string, type: string){
    let params = new HttpParams();
    params = params.append('index', index);
    params = params.append('type', type);
    return this.http.get<[]>(this.URI+'filtro/buscar_usuarios.php',{params: params});
  }

  postUsuario(user){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('nombre', user.name);
    form_data.append('email', user.email);
    return this.http.post(this.URI+'filtro/registrar_usuarios.php',form_data);
  }

  putUsuario(user){
    //console.log(marcar);
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('id', user.id);
    form_data.append('nombre', user.name);
    form_data.append('email', user.email);
    return this.http.post(this.URI+'filtro/editar_usuarios.php',form_data);
  }

  deleteData(user){
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('id', user.id);
    return this.http.post(this.URI+'filtro/eliminar_usuarios.php',form_data);

  }

  postImport(file){ 
    const form_data = new FormData();
    form_data.append('authorization', this.getToken());
    form_data.append('file', file);
    return this.http.post(this.URI+'filtro/importar_usuarios.php',form_data);
  }
  
}
