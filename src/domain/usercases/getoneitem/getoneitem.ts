import { Observable } from "rxjs";
import { Productofinanciero } from "src/domain/models/productofinanciero";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Getoneitem {
     constructor(
            private readonly _profinancierorepository:Profinancierorepository
        ){}
        start(id:number):Observable<Productofinanciero>{
            return this._profinancierorepository.getOnteItem({id});
        }
}
