import { Component, OnInit } from '@angular/core';

// imports necesarios para el formulario y sus validaciones
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit()  {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
  }

  get formulario() {
    return this.nuevoCorreo.controls;
  }


  onSubmit(){
    this.submitted = true;

    if(this.nuevoCorreo.invalid){
      return;
    }

    let correo = this.nuevoCorreo.value;
    correo.leido = false;
    correo.emisor = 'correoEmisor1@openwebinar.inv';

    alert("Correo enviado \n Eliminamos el formulario");
    this.onReset();
  }

  onReset(){
    this.submitted = false;
    this.nuevoCorreo.reset();
  }

}
