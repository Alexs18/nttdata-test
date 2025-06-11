import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";

export class Getitem {
     constructor(
            private readonly _profinancierorepository:Profinancierorepository
        ){}
        start(){
            return this._profinancierorepository.getItem();
        }
}
