import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IntranetConvAllComponent } from './intranet/intranet-conv-all/intranet-conv-all.component';
import { IntranetConvFollowComponent } from './intranet/intranet-conv-follow/intranet-conv-follow.component';
import { IntranetFcCursosComponent } from './intranet/intranet-fc-cursos/intranet-fc-cursos.component';
import { IntranetFcDatospersComponent } from './intranet/intranet-fc-datospers/intranet-fc-datospers.component';
import { IntranetFcExpComponent } from './intranet/intranet-fc-exp/intranet-fc-exp.component';
import { IntranetFcFormprofComponent } from './intranet/intranet-fc-formprof/intranet-fc-formprof.component';
import { IntranetFcInfoaddComponent } from './intranet/intranet-fc-infoadd/intranet-fc-infoadd.component';
import { IntranetIndexComponent } from './intranet/intranet-index/intranet-index.component';
import { IntranetLoginComponent } from './intranet/intranet-login/intranet-login.component';
import { IntranetRegisterComponent } from './intranet/intranet-register/intranet-register.component';
import { IntranetUpdatepassComponent } from './intranet/intranet-updatepass/intranet-updatepass.component';
import { IntranetComponent } from './intranet/intranet.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  {
    path: 'admin', 
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      }
    ]
  },
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
    path: 'intranet', 
    component: IntranetComponent,
    children: [
      {
        path: '',
        component: IntranetIndexComponent
      },
      {
        path: 'register',
        component: IntranetRegisterComponent
      },
      {
        path: 'login',
        component: IntranetLoginComponent
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
        path: 'convocatorias',
        component: IntranetConvAllComponent
      },
      {
        path: 'seguimiento',
        component: IntranetConvFollowComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
