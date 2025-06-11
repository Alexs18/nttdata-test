import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Getallitems } from 'src/data/models/getallitems';
import { Productofinanciero } from 'src/domain/models/productofinanciero';
import { Createitem } from 'src/domain/usercases/createitem/createitem';
import { Getitem } from 'src/domain/usercases/getitem/getitem';
import { erroralert, sucessalert } from 'src/external/helpers/helpers-alerts';
import { adddate, currentdate } from 'src/external/helpers/helpers-date';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  productos:Getallitems = {data:[]}
  form: FormGroup;
  fechaActual = currentdate();
  fechaRevision = adddate(this.fechaActual,'year', 1);
  constructor(
        private readonly fb: FormBuilder,
        private readonly _usecasecreateitem:Createitem,
        private readonly _route:Router,
  ) {
     this.form = this.fb.group({ 
          id: ['', [Validators.required, Validators.minLength(3)]],
          name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
          description: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(200)]],
          logo: ['', [Validators.required]],
          date_release: [this.fechaActual, [Validators.required]],
          date_revision: [{
            value:adddate(this.fechaActual,'year', 1),
            disabled: true
          }]
        });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.valid) {
      this.createItem(this.form.getRawValue())
    } else {
      this.form.markAllAsTouched();
    }
  }
  onReset(): void {
    this.form.reset({
      nombre: '',
      fechaLiberacion: '',
      fechaRevision: { value: '', disabled: true }
    });
  }

  getError(campo: string): string {
    const control = this.form.get(campo);
    
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
  createItem(data: Productofinanciero): void {
      this._usecasecreateitem.start(data).subscribe({
        next: (resp) => {
          if (resp.message === 'Product added successfully') {
            sucessalert('ITEM CREADO EXITOSAMENTE');
            this._route.navigateByUrl('/productos');
          } else {
            erroralert('No se pudo crear el item');
          }
        },
        error: (err) => {
          erroralert('Ocurrió un error. Contacte con sistemas.');
          console.error('Error:', err);
        }
      });
  }
  campoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && control.touched;
  }
  changedate(date:string){
    this.form.patchValue({
      date_revision:adddate(this.form.get('date_release')?.value, 'year', 1)
    })
  }

}
