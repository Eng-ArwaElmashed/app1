import { Routes } from '@angular/router';
import HomeComponet from './home/home.component';
import AboutComponent from './about/about.component';
import { PortoflioComponent } from './portoflio/portoflio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponet},
    {path:"about",component:AboutComponent},
    {path:"portoflio",component:PortoflioComponent},
    {path:"contact",component:ContactComponent}
    
];
