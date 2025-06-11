import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductofinancieroComponent } from './views/components/productofinanciero/productofinanciero.component';
import { implementationmodule } from 'src/data/implementation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './views/components/formulario/formulario.component';
import { ProductosComponent } from './views/components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductofinancieroComponent,
    FormularioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    implementationmodule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
