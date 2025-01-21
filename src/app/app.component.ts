import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponet from './home/home.component';
import AboutComponent from './about/about.component';
import bootstrap from '../main.server';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { PortoflioComponent } from './portoflio/portoflio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponet, AboutComponent, NavbarComponent,FooterComponent,PortoflioComponent,ContactComponent,RouterOutlet
    
  ]
})
export class AppComponent {
  title = 'app1';
}
