import { Component, OnInit } from '@angular/core';

// import '../app.component.css';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nome: string;
  nomePag: string;
  objetivo: string;



  constructor() {
    this.nomePag=("Home");
    this.objetivo=("Criar um novo componente");
   }

  ngOnInit(): void {
  }


}

// @Component({
//   selector: 'app-ngbd-data-binding',
//   templateUrl: './data-binding.component.html',
// })
// export class NgbdAccordionPreventchange {
//   public beforeChange($event: NgbPanelChangeEvent) {

//     if ($event.panelId === 'preventchange-2') {
//       $event.preventDefault();
//     }

//     if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
//       $event.preventDefault();
//     }
//   }
// }
