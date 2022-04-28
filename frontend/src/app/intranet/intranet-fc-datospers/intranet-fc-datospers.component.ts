import { Component, OnInit } from '@angular/core';
import './select_nacimiento';
import './select_vivienda';
import './ubigeo-peru.min.json';

@Component({
  selector: 'app-intranet-fc-datospers',
  templateUrl: './intranet-fc-datospers.component.html',
  styleUrls: ['./intranet-fc-datospers.component.css','../intranet.component.css']
})
export class IntranetFcDatospersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.test()
  }
  test(){

  }
}
