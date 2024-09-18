import { Observable } from "rxjs";
import { RestResponse } from "../models/rest/rest.response";
import {TaskCreate, TaskItem} from "../models/task.model";


export interface TaskService {
    findAll(keyword:string): Observable<RestResponse<TaskItem[]>>;
    findById(id:number|string): Observable<RestResponse<TaskItem>>;
    create(taskCreate: TaskCreate): Observable<RestResponse<TaskCreate>>;
}
