import { Component, HostListener, OnInit } from '@angular/core';
import { Getallitems } from 'src/data/models/getallitems';
import { Getitem } from 'src/domain/usercases/getitem/getitem';
import { Productofinanciero } from "src/domain/models/productofinanciero";
import { adddate, currentdate } from 'src/external/helpers/helpers-date';
import { Createitem } from 'src/domain/usercases/createitem/createitem';
import { erroralert, sucessalert } from 'src/external/helpers/helpers-alerts';
import { Deleteitem } from 'src/domain/usercases/deleteitem/deleteitem';
import { Updateitem } from 'src/domain/usercases/updateitem/updateitem';

@Component({
  selector: 'app-productofinanciero',
  templateUrl: './productofinanciero.component.html',
  styleUrls: ['./productofinanciero.component.scss']
})
export class ProductofinancieroComponent implements OnInit {

  mostrarMenu: number | null = null;
  productos:Getallitems = {data:[]}
  fechaActual = currentdate();
  fechaRevision = adddate(this.fechaActual,'year', 1);
  constructor(
    private readonly _usecasegetallitem:Getitem,
    private readonly _usecasecreateitem:Createitem,
    private readonly _usecasedeleteitem:Deleteitem,
    private readonly _usecaseupdateitem:Updateitem,

  ) {

  }

  ngOnInit(): void {
    this.getAllItems()
  }

  getAllItems(){
    this._usecasegetallitem.start().subscribe(
      resp=>{
        this.productos = resp        
      }
    );
  }

  createItem(data: Productofinanciero): void {
    this._usecasecreateitem.start(data).subscribe({
      next: (resp) => {
        if (resp.message === 'Product added successfully') {
          this.getAllItems();
          sucessalert('ITEM CREADO EXITOSAMENTE');
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


  deleteItem(id:number){

    this._usecasedeleteitem.start(545).subscribe({
      next: (resp) => {
        if (resp.message === "Product removed successfully") {
          this.getAllItems();
          sucessalert('Producto eliminado exitosamente');
        } else {
          erroralert('No se pudo eliminar el item');
        }
      },
      error: (err) => {
        erroralert('Ocurrió un error. Contacte con sistemas.');
        console.error('Error:', err);
      }
    })
  }

  parser(number:any){
    return parseInt(number)
  }

  agregar(){
    
  }
  setMenu(index: number, event: MouseEvent) {
  event.stopPropagation(); // evita que se cierre inmediatamente
  this.mostrarMenu = this.mostrarMenu === index ? null : index;
}

@HostListener('document:click')
cerrarMenu(): void {
  this.mostrarMenu = null;
}



 
 

}
