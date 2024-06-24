import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutomationActions } from '../../../classes/automation-actions';
import { AutomationDevices } from '../../../classes/automation-devices';
import { AutomationEvents } from '../../../classes/automation-events';
import { Automations } from '../../../classes/automations';
import { SharedService } from '../../../services/shared.service';
export interface DailogData {
  name: string;
}
@Component({
  selector: 'app-automations-details',
  
  templateUrl: './automations-details.component.html',
  styleUrl: './automations-details.component.scss'
})
export class AutomationsDetailsComponent {
  automation_devices:AutomationDevices[]=[];
  automation_events:AutomationEvents[]=[];
  automation_actions:AutomationActions[]=[];
  automation :Automations[]=[];
  totalRecords!: any;
  page: number = 1;

  constructor(private _shared:SharedService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AutomationsDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: DailogData){}


  ngOnInit(): void {
    this.automation = this._shared.getAutomationDetails();
    this.automationDevice(this._shared.getAutomationDetails());
    this.automationEvents(this._shared.getAutomationDetails());
    this.automationActions(this._shared.getAutomationDetails());
    
  }
  automationDevice(data: any) {
    if (data[0].automation_devices) {
      this.automation_devices = data[0].automation_devices;
      this.totalRecords = this.automation_devices.length;
      console.log('devices', data[0].automation_devices);
    }
  }
  automationEvents(data: any) {
    if (data[0].automation_events) {
      this.automation_events = data[0].automation_events;
      this.totalRecords = this.automation_events.length;
      console.log('Events', data[0].automation_events);
    }
  }
  automationActions(data: any) {
    if (data[0].automation_actions) {
      this.automation_actions = data[0].automation_actions;
      this.totalRecords = this.automation_actions.length;
      console.log('Actions', data[0].automation_actions);
    }
  }
  
}
 

