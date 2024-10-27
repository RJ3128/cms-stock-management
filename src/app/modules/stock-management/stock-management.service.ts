import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { StockItem } from "../models/stock.model";
import { StockImages } from "../models/stockImage.model";


@Injectable({
    providedIn: 'root'
})

export class StockManagementService {
    private apiUrl = environment.apiURL;

    constructor(
        private http: HttpClient
    ) { }

    getStock() {
        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get(`${this.apiUrl}/stock-management/get-all-stock`, { headers });
    }

    addStock(stockItem: StockItem, images: StockImages) {
        const payload = {
            stockItem: stockItem,
            stockImages: images
        };

        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.post(`${this.apiUrl}/stock-management/create-stock-item`, payload, { headers });
    }

    updateStock(stockItem: StockItem, images: StockImages, stockId) {
        const payload = {
            stockItem: stockItem,
            stockImages: images
        };

        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.put(`${this.apiUrl}/stock-management/update-stock-item/${stockId}`, payload, { headers });
    }

    deleteStock(stockId) {

        const token = localStorage.getItem('token'); // example, adjust as needed

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.delete(`${this.apiUrl}/stock-management/delete-stock-item/${stockId}`, { headers });
    }


}