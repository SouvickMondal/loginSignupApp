import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {SignupComponent} from './shared/signup/signup.component';
import {HomeComponent} from './home/home.component';
const routesList: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];

@NgModule({
    imports :[
        RouterModule.forRoot(routesList)
    ],
    exports:[RouterModule]
})
export class AppRouteModule{}