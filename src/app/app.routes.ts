import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { profileComponent } from './profile/profile.component';
import { SinupComponent } from './sinup/sinup.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'profile',component:profileComponent},
    {path:'sinup',component:SinupComponent},
    {path:'',component:HomeComponent},
    {path:'profile',component:profileComponent},
    {path:'**',component:PageNotFoundComponent}
//**{wild card routing(if any routing does not match with above one), it always write at last}



];
