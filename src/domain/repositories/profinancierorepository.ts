import { Observable } from "rxjs"
import { Getallitems } from "src/data/models/getallitems";
import { Productofinanciero } from "../models/productofinanciero";
import { Responsecreateproduct } from "../models/responsecreateproduct";
import { Responsegeneric } from "../models/responsegeneric";

export abstract class Profinancierorepository {

    abstract getItem():Observable<Getallitems>;
    abstract getOnteItem(params:{id:number}):Observable<Productofinanciero>;
    abstract createItem(body:Productofinanciero):Observable<Responsecreateproduct>;
    abstract updateItem(params:{id:number}, body:Productofinanciero):Observable<Responsegeneric>;
    abstract delete(params:{id:number}):Observable<Responsegeneric>;
}
