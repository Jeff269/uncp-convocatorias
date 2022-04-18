import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { IntranetComponent } from './intranet/intranet.component';
import { AdminComponent } from './admin/admin.component';
import { IntranetLoginComponent } from './intranet/intranet-login/intranet-login.component';
import { IntranetRegisterComponent } from './intranet/intranet-register/intranet-register.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    IntranetComponent,
    AdminComponent,
    IntranetLoginComponent,
    IntranetRegisterComponent,
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
    PublicConvocatoriasDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
