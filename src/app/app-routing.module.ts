import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductofinancieroComponent } from './views/components/productofinanciero/productofinanciero.component';
import { FormularioComponent } from './views/components/formulario/formulario.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'productos',
    component:ProductofinancieroComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
