import { Observable } from "rxjs";
import { Responsegeneric } from "src/domain/models/responsegeneric";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Deleteitem {
    constructor(
        private readonly _profinancierorepository:Profinancierorepository
    ){}
    start(id:number):Observable<Responsegeneric>{
        return this._profinancierorepository.delete({id});
    }
}
