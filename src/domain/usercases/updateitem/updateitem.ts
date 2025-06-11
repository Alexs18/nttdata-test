import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Updateitem {
     constructor(
            private readonly _profinancierorepository:Profinancierorepository
    ){}
    start(){
        return this._profinancierorepository.getOnteItem();
    }
}
