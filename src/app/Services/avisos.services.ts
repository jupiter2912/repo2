import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn : 'root'
})

export class AvisosService {

  

  constructor(private _snackBar : MatSnackBar) {
    
   }

  showMessage(mensaje : string) {
    this._snackBar.open(mensaje,'Informacion',{
      duration: 2000,
    });
  }
}