import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IClients } from './../store/interfaces/clients.interface';

@Injectable({
  providedIn: "root"
})

export class ClientsService {

  private clientsUrl = "http://localhost:3000/clients";

  constructor(private http: HttpClient) {}

  //Получить список клиентов
  getClients(): Observable<IClients[]> {
    return this.http.get<IClients[]>(this.clientsUrl);
  }

  //Создать клиента
  createClient(payload: IClients): Observable<IClients> {
    return this.http.post<IClients>(this.clientsUrl, payload);
  }

}