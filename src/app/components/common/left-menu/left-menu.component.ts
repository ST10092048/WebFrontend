import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NavNode } from '../tree-view/tree-view.component';
const TREE_DATA: NavNode[] = [
  {
    name: 'Home',
    route: '/assets'
  },
  {
    name: 'E-Gov', route: '/e-gov'
  },
  {
    name: 'E-Gov Database', route: '/e-govDatabase' 
  },
  { name: 'Devices', route: '/all-devices' },
  { name: 'Automations', route: '/automations' },
  { name: 'Control Zone', route: '/control-zones' },
  { name: 'Device Daily Report', route: '/DeviceDaliyReport' },
  { name: 'Missing Reports', route: '/AllReports' },
  { name:'Logout',route:'/logout'}
];
@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  treeData: NavNode[] = TREE_DATA;
//   constructor(private _service: AuthService,
//     private _router: Router) { }

//   assets(): void{
//     this._router.navigate(['/assets']);
//   }
//   DeviceDaliyReport(){
//     this._router.navigate(['/DeviceDaliyReport']);
//   }

//   Devices(){
//     this._router.navigate(['/devices']);
    
//   }

//  allDevices(){
//     this._router.navigate(['/all-devices']);
//  }
  

  
//   automations(){
//     this._router.navigate(['/automations']);
//   }

//   departments(){
//     this._router.navigate(['/e-gov']);
//   }
//   database(){
//     this._router.navigate(['/e-govDatabase']);
//   }

//   theMap(){
//     this._router.navigate(['/the-map']);
//   }

//   reports(){
//     this._router.navigate(['/reports']);
//   }
//   AllReports(){
//     this._router.navigate(['/AllReports']);
//   }

//   controlZones(){
//     this._router.navigate(['/control-zones']);
//   }
//   UserRegistration(){
//     this._router.navigate(['/register']);
//   }

//   //  automations-details(){
//   //    this._router.navigate(['/automations-details']);
//   //  }

//   logout(event: MouseEvent) {
//     event.preventDefault();
//     this._service.removeToken();
//     this._service.changeAuthStatus(false);
//     this._router.navigate(['/login']);
//   }
}
