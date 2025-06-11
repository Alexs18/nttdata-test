import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Profinancierorepository } from 'src/domain/repositories/profinancierorepository';
import { Createitem } from 'src/domain/usercases/createitem/createitem';
import { Deleteitem } from 'src/domain/usercases/deleteitem/deleteitem';
import { Getitem } from 'src/domain/usercases/getitem/getitem';
import { Getoneitem } from 'src/domain/usercases/getoneitem/getoneitem';
import { Updateitem } from 'src/domain/usercases/updateitem/updateitem';
import { Inprofinancierorepository } from './implementation/inprofinancierorepository.service';
import { HttpClientModule } from '@angular/common/http';

const getItemFactory = (profinanciero: Profinancierorepository)=> new Getitem(profinanciero);
const reggetitemprovider = {
  provide:Getitem,
  useFactory:getItemFactory,
  deps:[Profinancierorepository]
}

const getOneItemFactory = (profinanciero: Profinancierorepository)=> new Getoneitem(profinanciero);
const reggetoneitemprovider = {
  provide:Getoneitem,
  useFactory:getOneItemFactory,
  deps:[Profinancierorepository]
}

const createItemFactory = (profinanciero: Profinancierorepository)=> new Createitem(profinanciero);
const regcreateprovider = {
  provide:Createitem,
  useFactory:createItemFactory,
  deps:[Profinancierorepository]
}

const updateItemFactory = (profinanciero: Profinancierorepository)=> new Updateitem(profinanciero);
const regupdateterprovider = {
  provide:Updateitem,
  useFactory:updateItemFactory,
  deps:[Profinancierorepository]
}

const deleteitemFactory = (profinanciero: Profinancierorepository)=> new Deleteitem(profinanciero);
const regdeleteprovider = {
  provide:Deleteitem,
  useFactory:deleteitemFactory,
  deps:[Profinancierorepository]
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    reggetitemprovider,
    reggetoneitemprovider,
    regcreateprovider,
    regdeleteprovider,
    regupdateterprovider,
    {provide:Profinancierorepository, useClass:Inprofinancierorepository}
  ],
  bootstrap: []
})
export class implementationmodule { }
