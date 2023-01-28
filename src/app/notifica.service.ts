import { Injectable } from '@angular/core';
import { MattSnackBar } from '@angular/material/typings';

@Injectable({
  providedIn: 'root'
})
export class NotificaService {

  constructor(
    private snackBar: MattSnackBar
  ) { }

  notificar(mensagem: string){
    this.snackBar.open(mensagem,"Ok",{
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    }); 
  }
}
