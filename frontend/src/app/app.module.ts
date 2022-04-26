import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { IntranetComponent } from './intranet/intranet.component';
import { AdminComponent } from './admin/admin.component';

import { IntranetUpdatepassComponent } from './intranet/intranet-updatepass/intranet-updatepass.component';
import { IntranetIndexComponent } from './intranet/intranet-index/intranet-index.component';
import { IntranetFcDatospersComponent } from './intranet/intranet-fc-datospers/intranet-fc-datospers.component';
import { IntranetFcFormprofComponent } from './intranet/intranet-fc-formprof/intranet-fc-formprof.component';
import { IntranetFcCursosComponent } from './intranet/intranet-fc-cursos/intranet-fc-cursos.component';
import { IntranetFcExpComponent } from './intranet/intranet-fc-exp/intranet-fc-exp.component';
import { IntranetFcInfoaddComponent } from './intranet/intranet-fc-infoadd/intranet-fc-infoadd.component';
import { IntranetConvAllComponent } from './intranet/intranet-conv-all/intranet-conv-all.component';
import { IntranetConvFollowComponent } from './intranet/intranet-conv-follow/intranet-conv-follow.component';
import { PublicConvocatoriasComponent } from './public/public-convocatorias/public-convocatorias.component';
import { PublicContactoComponent } from './public/public-contacto/public-contacto.component';
import { PublicConvocatoriasDetallesComponent } from './public/public-convocatorias-detalles/public-convocatorias-detalles.component';
import { IntranetLoginComponent } from './intranet-login/intranet-login.component';
import { IntranetRegisterComponent } from './intranet-register/intranet-register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminReportesComponent } from './admin/admin-reportes/admin-reportes.component';
import { AdminFiltroComponent } from './admin/admin-filtro/admin-filtro.component';
import { AdminConvocatoriasComponent } from './admin/admin-convocatorias/admin-convocatorias.component';
import { AdminPlazasComponent } from './admin/admin-plazas/admin-plazas.component';
import { AdminPostulantesComponent } from './admin/admin-postulantes/admin-postulantes.component';
import { AdminDependenciasComponent } from './admin/admin-dependencias/admin-dependencias.component';
import { AdminPostulantesPlazaComponent } from './admin/admin-postulantes-plaza/admin-postulantes-plaza.component';
import { AdminEvaluacionCurricularComponent } from './admin/admin-evaluacion-curricular/admin-evaluacion-curricular.component';
import { IntranetCorreoComponent } from './intranet/intranet-correo/intranet-correo.component';
import { IntranetConvDetailComponent } from './intranet/intranet-conv-detail/intranet-conv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    IntranetComponent,
    AdminComponent,
 
    IntranetUpdatepassComponent,
    IntranetIndexComponent,
    IntranetFcDatospersComponent,
    IntranetFcFormprofComponent,
    IntranetFcCursosComponent,
    IntranetFcExpComponent,
    IntranetFcInfoaddComponent,
    IntranetConvAllComponent,
    IntranetConvFollowComponent,
    PublicConvocatoriasComponent,
    PublicContactoComponent,
    PublicConvocatoriasDetallesComponent,
    IntranetLoginComponent,
    IntranetRegisterComponent,
    UnauthorizedComponent,
    AdminUsuariosComponent,
    AdminReportesComponent,
    AdminFiltroComponent,
    AdminConvocatoriasComponent,
    AdminPlazasComponent,
    AdminPostulantesComponent,
    AdminDependenciasComponent,
    AdminPostulantesPlazaComponent,
    AdminEvaluacionCurricularComponent,
    IntranetCorreoComponent,
    IntranetConvDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
