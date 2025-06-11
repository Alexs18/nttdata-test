import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Createitem {

    constructor(
        private readonly _profinancierorepository:Profinancierorepository
    ){}

    start(){
        return this._profinancierorepository.createItem();
    }
}
