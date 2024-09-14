import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../../core/models/task.model';
import { RestResponse } from '../../../core/models/rest/rest.response';
import { TaskServiceImpl } from '../../../core/services/impl/task.service.impl';


@Component({
    selector: 'app-task-liste',
    standalone: true,
    imports: [],
    templateUrl: './task-liste.component.html',
    styleUrl: './task-liste.component.css'
})
export class TaskListeComponent implements OnInit{
  response?:RestResponse<TaskItem[]>
  constructor(private taskService: TaskServiceImpl){

  }
  ngOnInit(): void {
    
  }

  refresh(keyword=""):void{
    this.taskService.findAll(keyword).subscribe(data=>this.response=data);
  }
}
