import * as moment from "moment";

export function currentdate() {
    return moment().format('YYYY-MM-DD');
}

export function adddate(date:any, type:any, cant:any) {
    return moment(date).add(cant, type).format('YYYY-MM-DD')
}