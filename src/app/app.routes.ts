import {provideRouter, Routes, withComponentInputBinding} from '@angular/router';
import { TaskListeComponent } from './public/components/task-liste/task-liste.component';
import { InfoComponent } from './public/components/compte/info/info.component';
import { TaskAddComponent } from './public/components/task-add/task-add.component';
import {AppComponent} from "./app.component";
import {TaskEditComponent} from "./public/components/task-edit/task-edit.component";

export const routes: Routes = [
    { path: '', redirectTo: 'task', pathMatch: 'full' },
    { path:'task', component:TaskListeComponent},
    { path:'add', component:TaskAddComponent},
    { path:'details/:id', component:TaskEditComponent},
    { path:'account', component:InfoComponent},
    { path:'login', component:InfoComponent}
];
