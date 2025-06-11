import { Observable } from "rxjs";
import { Productofinanciero } from "src/domain/models/productofinanciero";
import { Responsecreateproduct } from "src/domain/models/responsecreateproduct";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Createitem {

    constructor(
        private readonly _profinancierorepository:Profinancierorepository
    ){}

    start(body:Productofinanciero):Observable<Responsecreateproduct>{
        return this._profinancierorepository.createItem(body);
    }
}
