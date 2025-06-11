import { Observable } from "rxjs"

export abstract class Profinancierorepository {

    abstract getItem():Observable<any>;
    abstract getOnteItem():Observable<any>;
    abstract createItem():Observable<any>;
    abstract updateItem():Observable<any>;
    abstract delete():Observable<any>;
}
