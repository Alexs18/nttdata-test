import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductofinancieroComponent } from './views/components/productofinanciero/productofinanciero.component';
import { FormularioComponent } from './views/components/formulario/formulario.component';
import { MainComponent } from './views/main/main.component';
import { ProductosComponent } from './views/components/productos/productos.component';

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
  },
  {
    path:'actualizarproducto',
    component:ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
