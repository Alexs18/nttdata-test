import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Deleteitem {
    constructor(
        private readonly _profinancierorepository:Profinancierorepository
    ){}
    start(){
        return this._profinancierorepository.delete();
    }
}
