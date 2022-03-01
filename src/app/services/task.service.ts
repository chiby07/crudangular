import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl ="http://localhost:3000/task";

  constructor(private http: HttpClient) { }

  findAll() {
   return this.http.get<Task[]>(this.apiUrl);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
