import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NavNode } from '../tree-view/tree-view.component';
const TREE_DATA: NavNode[] = [
  {
    name: 'Home',
    route: '/assets'
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
}
