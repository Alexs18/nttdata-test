import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Productofinanciero } from 'src/domain/models/productofinanciero';
import { Createitem } from 'src/domain/usercases/createitem/createitem';
import { Deleteitem } from 'src/domain/usercases/deleteitem/deleteitem';
import { Getitem } from 'src/domain/usercases/getitem/getitem';
import { Updateitem } from 'src/domain/usercases/updateitem/updateitem';
import { erroralert, sucessalert } from 'src/external/helpers/helpers-alerts';
import { adddate, currentdate } from 'src/external/helpers/helpers-date';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  showcontent = false;
  productlocal:any
  formupdate: FormGroup;
  fechaActual = currentdate();
  fechaRevision = adddate(this.fechaActual,'year', 1);
  constructor(
      private readonly fb: FormBuilder,
      private readonly _usecaseupdateitem:Updateitem,
      private readonly _route:Router,
  ) {
     this.formupdate = this.fb.group({ 
      id: [{value:'',disable:true}],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(200)]],
      logo: ['', [Validators.required]],
      date_release: ['', [Validators.required]],
      date_revision: [{
        value:'',
        disable: true
      }]
    });
  }

  ngOnInit(): void {
    this.setearproductedit(this.getproductlocal());
    setTimeout(() => {
      this.showcontent = true;
    }, 200); 
  }
  getError(campo: string): string {
      const control = this.formupdate.get(campo);
      
      if (!control || !control.errors) return '';
      if (control.errors['required']) return 'Este campo es obligatorio.';
      if (control.errors['minlength']) {
        return `Mínimo ${control.errors['minlength'].requiredLength} caracteres.`;
      }
      if (control.errors['maxlength']) {
        return `Maximo ${control.errors['maxlength'].requiredLength} caracteres.`;
      }
      if (control.errors['pattern']) {
        if (campo === 'logo') return 'Debe ser una URL de imagen válida.';
      }
      if (control.errors['fechaPasada']) return 'La fecha debe ser hoy o en el futuro';
  
      return 'Campo inválido.';
  }
  
  changedate(date:string){
      this.formupdate.patchValue({
        date_revision:adddate(this.formupdate.get('date_release')?.value, 'year', 1)
      })
  }

   campoInvalido(campo: string): boolean {
    const control = this.formupdate.get(campo);
    return !!control && control.invalid && control.touched;
  }
  
  setearproductedit(producto:Productofinanciero){
    this.formupdate.patchValue(producto);
  }
  getproductlocal(){
   return this.productlocal = JSON.parse(localStorage.getItem('producto')?? 'null')
  }
   onSubmitEdit(){
    this.editItem(this.formupdate.get('id')?.value,this.formupdate.getRawValue())
  }
   editItem(id:number, data:Productofinanciero){
    this._usecaseupdateitem.start(id, data).subscribe({
      next: (resp) => {
        if (resp.message === "Product updated successfully") {
          sucessalert('Producto actualizado exitosamente');
          this._route.navigateByUrl('/productos');
        } else {
          erroralert('No se pudo acualizar el item');
        }
      },
      error: (err) => {
        erroralert('Ocurrió un error. Contacte con sistemas.');
        console.error('Error:', err);
      }
    })
  }
}
