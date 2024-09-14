import { Routes } from '@angular/router';
import { TaskListeComponent } from './public/components/task-liste/task-liste.component';
import { InfoComponent } from './public/components/compte/info/info.component';
import { TaskAddComponent } from './public/components/task-add/task-add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'task', pathMatch: 'full' },
    { path:'task', component:TaskListeComponent},
    { path:'add', component:TaskAddComponent},
    { path:'details:id', component:TaskAddComponent},
    { path:'account', component:InfoComponent},
    { path:'login', component:InfoComponent}
];
