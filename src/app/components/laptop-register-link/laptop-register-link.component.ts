import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-register-link',
  templateUrl: './laptop-register-link.component.html',
  styleUrl: './laptop-register-link.component.scss'
})
export class LaptopRegisterLinkComponent {
  RegisterDevice():void{
    const preyUrl = 'https://prey.io/dl/o9ObfLUmTJFWKBl4';
    const link = document.createElement('a');
    link.href = preyUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('The software file has been downloaded. Please open it from your downloads folder to install.');
  }
}
