import {Component, OnInit} from '@angular/core';
import {RestResponse} from "../../../core/models/rest/rest.response";
import {TaskCreate, TaskItem} from "../../../core/models/task.model";
import {TaskServiceImpl} from "../../../core/services/impl/task.service.impl";
import {Router} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit{
  response?: RestResponse<TaskItem>
  id?:string
  form?:any
  echec: String | null = null;
  success: String | null = null;
  constructor(private taskService: TaskServiceImpl, private fb: FormBuilder, private router: Router) {}


  ngOnInit(): void {
    this.build();
  }


  build(){
    this.form=this.fb.group({
      title:['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      etat:['', Validators.min(0)]
    })
  }

  onSubmit(){
    const { ...formData} = this.form.value;
    var task: TaskCreate ={title:formData.title!,description:formData.description!,etat:formData.etat!}
    this.taskService.create(task).subscribe((data) => {
      if (data.status == 201) {
        this.form.reset();
        this.echec=null;
        this.success = 'Tâche enregistrée avec succès Code : '+data.status+" 201";
        setTimeout(() => {
          this.success = null;
          this.router.navigateByUrl('/add')
        }, 3000);
      }else if(data.status==406){
        this.echec = "Veuillez remplir correctement "+data.status;
      }else {
        this.echec = "Erreur d'enregistrement de la tâche. Code : "+data.status;
      }
    })
  }
}
