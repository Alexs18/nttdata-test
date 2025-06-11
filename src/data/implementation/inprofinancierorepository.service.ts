import { Observable } from "rxjs";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";
import {HttpClient} from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Productofinanciero } from "src/domain/models/productofinanciero";
import { Getallitems } from "../models/getallitems";
import { Responsecreateproduct } from "src/domain/models/responsecreateproduct";
import { Responsegeneric } from "src/domain/models/responsegeneric";

@Injectable({
  providedIn: 'root'
})
export class Inprofinancierorepository  extends Profinancierorepository{

    constructor(
        private readonly _http:HttpClient
    ){
        super()
    }

    getItem(): Observable<Getallitems> {
        return this._http.get<Getallitems>('/bp/products')
    }
    getOnteItem(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    createItem(body:Productofinanciero): Observable<Responsecreateproduct> {
        return this._http.post<Responsecreateproduct>('/bp/products',body);
    }
    updateItem(params:{id:number}, body:Productofinanciero): Observable<Responsegeneric> {
        return this._http.put<Responsegeneric>(`/bp/products/${params.id}`,body)
    }
    delete(params:{id:number}): Observable<Responsegeneric> {
        return this._http.delete<Responsegeneric>(`/bp/products/${params.id}`)
    }
}
