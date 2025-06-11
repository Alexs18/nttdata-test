import { Observable } from "rxjs";
import { Productofinanciero } from "src/domain/models/productofinanciero";
import { Responsegeneric } from "src/domain/models/responsegeneric";
import { Updateproductofinanciero } from "src/domain/models/updateproductofinanciero";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Updateitem {
     constructor(
            private readonly _profinancierorepository:Profinancierorepository
    ){}
    start(id:number, body:Productofinanciero):Observable<Responsegeneric>{
        return this._profinancierorepository.updateItem({id}, body);
    }
}
