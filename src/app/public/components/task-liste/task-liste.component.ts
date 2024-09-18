import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../../core/models/task.model';
import { RestResponse } from '../../../core/models/rest/rest.response';
import { TaskServiceImpl } from '../../../core/services/impl/task.service.impl';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";


@Component({
    selector: 'app-task-liste',
    standalone: true,
  imports: [FormsModule, NgClass],
    templateUrl: './task-liste.component.html',
    styleUrl: './task-liste.component.css'
})
export class TaskListeComponent implements OnInit{
  response?:RestResponse<TaskItem[]>
  key="";
  constructor(private taskService: TaskServiceImpl){

  }
  ngOnInit(): void {
    this.refresh()
  }

  onKeyup(){
    this.refresh(this.key)
  }

  refresh(keyword=""):void{
    this.taskService.findAll(keyword).subscribe(data=>this.response=data);
  }
}
