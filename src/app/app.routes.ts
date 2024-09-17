import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CsvHomeComponent } from './protected/csv-home/csv-home.component';
import { AuthGuard } from './guards/auth.guard';
import { FilesComponent } from './protected/files/files.component';
import { FileComponent } from './protected/file/file.component';

export const routes: Routes = [
    {path:"", title:"Home", component: HomeComponent},
    {path:"login", title:"Login", component:LoginComponent},
    {path:"register", title:"Register", component:RegisterComponent},
    {path:"csv-home", title:"CSV-home", component: CsvHomeComponent, canActivate:[AuthGuard]},
    {path:"files", title:"Files", component:FilesComponent , canActivate:[AuthGuard]} ,
    {path:"file/:id", title:"File", component:FileComponent, canActivate:[AuthGuard]}

];
