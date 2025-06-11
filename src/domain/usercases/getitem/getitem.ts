import { Observable } from "rxjs";
import { Getallitems } from "src/data/models/getallitems";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Getitem {
     constructor(
            private readonly _profinancierorepository:Profinancierorepository
        ){}
        start():Observable<Getallitems>{
            return this._profinancierorepository.getItem();
        }
}
