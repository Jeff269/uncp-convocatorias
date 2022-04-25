import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConvocatoriasComponent } from './admin/admin-convocatorias/admin-convocatorias.component';
import { AdminDependenciasComponent } from './admin/admin-dependencias/admin-dependencias.component';
import { AdminEvaluacionCurricularComponent } from './admin/admin-evaluacion-curricular/admin-evaluacion-curricular.component';
import { AdminFiltroComponent } from './admin/admin-filtro/admin-filtro.component';
import { AdminPlazasComponent } from './admin/admin-plazas/admin-plazas.component';
import { AdminPostulantesPlazaComponent } from './admin/admin-postulantes-plaza/admin-postulantes-plaza.component';
import { AdminPostulantesComponent } from './admin/admin-postulantes/admin-postulantes.component';
import { AdminReportesComponent } from './admin/admin-reportes/admin-reportes.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminComponent } from './admin/admin.component';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthBlockGuard } from './auth-block.guard';
import { AuthUserlogGuard } from './auth-userlog.guard';
import { AuthGuard } from './auth.guard';
import { IntranetLoginComponent } from './intranet-login/intranet-login.component';
import { IntranetRegisterComponent } from './intranet-register/intranet-register.component';
import { IntranetConvAllComponent } from './intranet/intranet-conv-all/intranet-conv-all.component';
import { IntranetConvFollowComponent } from './intranet/intranet-conv-follow/intranet-conv-follow.component';
import { IntranetFcCursosComponent } from './intranet/intranet-fc-cursos/intranet-fc-cursos.component';
import { IntranetFcDatospersComponent } from './intranet/intranet-fc-datospers/intranet-fc-datospers.component';
import { IntranetFcExpComponent } from './intranet/intranet-fc-exp/intranet-fc-exp.component';
import { IntranetFcFormprofComponent } from './intranet/intranet-fc-formprof/intranet-fc-formprof.component';
import { IntranetFcInfoaddComponent } from './intranet/intranet-fc-infoadd/intranet-fc-infoadd.component';
import { IntranetIndexComponent } from './intranet/intranet-index/intranet-index.component';

import { IntranetUpdatepassComponent } from './intranet/intranet-updatepass/intranet-updatepass.component';
import { IntranetComponent } from './intranet/intranet.component';
import { PublicComponent } from './public/public.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {IntranetCorreoComponent} from "./intranet/intranet-correo/intranet-correo.component";


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: PublicComponent
      }
    ]
  },


  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthAdminGuard],
    canActivateChild: [AuthAdminGuard],
    children: [
      {
        path: '',
        component: AdminUsuariosComponent
      },
      {
        path: 'reportes',
        component: AdminReportesComponent
      },
      {
        path: 'filtro',
        component: AdminFiltroComponent
      },
      {
        path: 'dependencias',
        component: AdminDependenciasComponent
      },
      {
        path: 'postulantes',
        component: AdminPostulantesComponent
      },
      {
        path: 'convocatorias',
        component: AdminConvocatoriasComponent
      },
      {
        path: 'convocatorias/:id',
        component: AdminPlazasComponent
      },
      {
        path: 'convocatorias/:id/plaza/:id',
        component: AdminPostulantesPlazaComponent
      },
      {
        path: 'evaluacion',
        component: AdminEvaluacionCurricularComponent
      }
    ]
  },


  {
    path: 'register',
    component: IntranetRegisterComponent,
    canLoad: [AuthUserlogGuard]
  },
  {
    path: 'login',
    component: IntranetLoginComponent,
    canLoad: [AuthUserlogGuard]
  },
  {
    path: 'intranet',
    component: IntranetComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: IntranetIndexComponent
      },
      {
        path: 'updatepass',
        component: IntranetUpdatepassComponent
      },
      {
        path: 'datospersonales',
        component: IntranetFcDatospersComponent
      },
      {
        path: 'formacionprof',
        component: IntranetFcFormprofComponent
      },
      {
        path: 'cursos',
        component: IntranetFcCursosComponent
      },
      {
        path: 'experiencia',
        component: IntranetFcExpComponent
      },
      {
        path: 'infoadd',
        component: IntranetFcInfoaddComponent
      },
      {
        path: 'correo',
        component: IntranetCorreoComponent
      },
      {
        path: 'convocatorias',
        component: IntranetConvAllComponent
      },
      {
        path: 'seguimiento',
        component: IntranetConvFollowComponent
      }
    ]
  },

  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    canActivate: [AuthBlockGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
