import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class AdminService {
    private apiUrl = environment.apiURL;

    constructor(
        private http: HttpClient
    ) { }

    getUsers() {
        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get(`${this.apiUrl}/user/get-users`, { headers });
    }

    createUser(user) {
        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.post(`${this.apiUrl}/user/create-user`, user, { headers });
    }


    deleteUser(userId) {
        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.delete(`${this.apiUrl}/user/delete-user/${userId}`, { headers });
    }


}