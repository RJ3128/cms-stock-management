import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = environment.apiURL;

    constructor(
        private http: HttpClient
    ) { }

    login(userCredentials) {
        return this.http.post(`${this.apiUrl}/user/authenticate`, userCredentials);
    }
}