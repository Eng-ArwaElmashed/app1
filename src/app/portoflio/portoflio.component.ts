import { Component } from '@angular/core';

@Component({
  selector: 'app-portoflio',
  imports: [],
  templateUrl: './portoflio.component.html',
  styleUrl: './portoflio.component.css'
})
export class PortoflioComponent {
img1:string="/images/poert1.png";
img2:string="/images/port2.png";
img3:string="/images/port3.png";
selectedImage: string = ''; 
isOpen=false 

openModal(image: string): void {
  this.selectedImage = image; 
  this.isOpen = true; 
}

closeModal(): void {
  this.isOpen = false; 
}
}
