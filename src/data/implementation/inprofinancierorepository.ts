import { Observable } from "rxjs";
import { Profinancierorepository } from "src/domain/repositories/profinancierorepository";
import {HttpClient} from '@angular/common/http'

export class Inprofinancierorepository  extends Profinancierorepository{

    constructor(
        private readonly _http:HttpClient
    ){
        super()
    }

    getItem(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    getOnteItem(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    createItem(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    updateItem(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Observable<any> {
        throw new Error("Method not implemented.");
    }
}
