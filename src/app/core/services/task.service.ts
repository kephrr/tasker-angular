import { Observable } from "rxjs";
import { RestResponse } from "../models/rest/rest.response";
import { TaskItem } from "../models/task.model";


export interface TaskService {
    findAll(keyword:string): Observable<RestResponse<TaskItem[]>>;
}
