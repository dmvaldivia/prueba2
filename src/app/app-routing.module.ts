import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicioslegalComponent } from './pages/servicioslegal/servicioslegal.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'servicioslegal', component: ServicioslegalComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}


];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {}