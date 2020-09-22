import { Injectable } from '@angular/core'

@Injectable({
    providedIn : 'root'
})

export class AvisosService {

  mensaje : string;
  visible: boolean;

  constructor() {
    this.mensaje = "Correo Enviado";
    this.visible = false;
   }

  showMessage(mensaje : string) {
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHide();
  }

  hideMessage(){
    this.visible = false;
    this.mensaje = '';
  }

  waitToHide(){
    setTimeout(() => {
      this.hideMessage();
    }, 2000);
  }
}