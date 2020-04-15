import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ExpenseListDTO} from '../models';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) {}

    post(serviceName: string, data: any) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Request-Method', 'POST');
        // TODO as per video below is headers: headers.
        const options = {headers, withCredentials: false};

        const url = environment.apiUrl + serviceName;

        return this.http.post(url, data, options);
    }

    get(serviceName: string, queryParam: string) {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Request-Method', 'GET');
        const options = {headers, withCredentials: false};
        const url = environment.apiUrl + serviceName + queryParam;
        return this.http.get(url, options);
    }

    getExpenseList(serviceName: string, queryParam: string) {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Request-Method', 'GET');
        const options = {headers, withCredentials: false};
        const url = environment.apiUrl + serviceName + queryParam;
        return this.http.get<ExpenseListDTO>(url, options);
    }
}
