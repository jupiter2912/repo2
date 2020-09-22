import { Component, OnInit } from '@angular/core';
import { AvisosService } from 'src/app/Services/avisos.services';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  constructor(public servicioAvisos : AvisosService) {}

  ngOnInit() {}
}
