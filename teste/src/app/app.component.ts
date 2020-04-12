import { Component } from '@angular/core';
import './app.component.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';
  nome: string;
  nomePag: string;
  objetivo: string;

  constructor(){
    this.nomePag=("Home");
    this.objetivo=("Primeiro Componente");
    this.nome=("Bem Vindo");
  }
}
