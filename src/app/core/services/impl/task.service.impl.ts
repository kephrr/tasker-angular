import { Injectable } from '@angular/core';
import { TaskService } from '../task.service';
import { RestResponse } from '../../models/rest/rest.response';
import { TaskCreate, TaskItem} from '../../models/task.model';
import {environment} from '../../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceImpl implements TaskService {
  private url = environment.API_URL + "/tasks"

  constructor(private http: HttpClient) {
  }

  create(taskCreate: TaskCreate): Observable<RestResponse<TaskCreate>> {
    return this.http.post<RestResponse<TaskCreate>>(`${this.url}`, taskCreate)
    }

  findById(id: number|string): Observable<RestResponse<TaskItem>> {
    return this.http.get<RestResponse<TaskItem>>(`${this.url}/${id}/details`)
    }
  findAll(keyword:string=""): Observable <RestResponse<TaskItem[]>>{
    return this.http.get<RestResponse<TaskItem[]>>(`${this.url}?keyword=${keyword}`)
  }
}
