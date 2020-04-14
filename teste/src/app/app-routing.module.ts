import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './Paginas/data-binding/data-binding.component';


const routes: Routes = [
  {path: 'primeiro-componente',
  component: DataBindingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
