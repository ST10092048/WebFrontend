import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/Access-control/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { EGovComponent } from './pages/EGOVdata/e-gov/e-gov.component';
import { EGovDatabaseComponent } from './pages/EGOVdata/egov-database/egov-database.component';
import { AutomationsComponent } from './pages/automationComponents/automations/automations.component';
import { ControlZonesComponent } from './pages/controlZoneComponents/control-zones/control-zones.component';
import { AllDevicesComponent } from './pages/device/all-device-view/all-devices/all-devices.component';
import { CreateZoneComponent } from './pages/controlZoneComponents/create-zone/create-zone.component';
import { AllDeviceDetailsComponent } from './pages/device/all-device-details/all-device-details.component';
import { ReportsDetailsComponent } from './pages/device/device-reports/reports-details/reports-details.component';
import { AutomationsDetailsComponent } from './pages/automationComponents/automations-details/automations-details.component';
import { ReportsComponent } from './pages/device/device-reports/reports/reports.component';
import { ControlZoneDetailsComponent } from './pages/controlZoneComponents/control-zone-details/control-zone-details.component';
import { DeviceLastlocationComponent } from './pages/device/device-details/device-lastlocation/device-lastlocation.component';
import { RegisterComponent } from './pages/Access-control/register/register.component';
import { DatabaseReportsComponent } from './pages/device/device-reports/database-reports/database-reports.component';
import { AllTagsComponent } from './pages/RFIDFrontend/tags/all-tags/all-tags.component';
import { CreateTagComponent } from './pages/RFIDFrontend/tags/create-tag/create-tag.component';
import { UpdateTagComponent } from './pages/RFIDFrontend/tags/update-tag/update-tag.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TagDataTableComponent } from './pages/RFIDFrontend/tags/tag-data-table/tag-data-table.component';
import { CategoryTagComponent } from './pages/RFIDFrontend/tags/category-tag/category-tag.component';
import { ConditionTagComponent } from './pages/RFIDFrontend/tags/condition-tag/condition-tag.component';
import { BrandTagComponent } from './pages/RFIDFrontend/tags/brand-tag/brand-tag.component';
import { TagCreateDataTableComponent } from './pages/RFIDFrontend/tags/tag-create-data-table/tag-create-data-table.component';
import { LocationTagComponent } from './pages/RFIDFrontend/tags/location-tag/location-tag.component';
import { DataTablesUpdateComponent } from './pages/RFIDFrontend/tags/data-tables-update/data-tables-update.component';
import { DisposalTagComponent } from './pages/RFIDFrontend/tags/disposal-tag/disposal-tag.component';
import { ExistingTagsComponent } from './pages/RFIDFrontend/tags/existing-tags/existing-tags.component';
import { MissingtagsComponent } from './pages/RFIDFrontend/tags/missingtags/missingtags.component';
import { RFIDGateCurrentComponent } from './pages/RFIDFrontend/Gates/rfidgate-current/rfidgate-current.component';
import { RFIDGateReportComponent } from './pages/RFIDFrontend/Gates/rfidgate-report/rfidgate-report.component';
import { RFIDRegisterComponent } from './pages/RFIDFrontend/Gates/rfidregister/rfidregister.component';
import { DeviceDaliyReportComponent } from './pages/device/device-daliy-report/device-daliy-report.component';
import { AdministrationComponent } from './pages/Admin-panel/administration/administration.component';
import { ReaderComponent } from './pages/RFIDFrontend/FixedReader/reader/ReaderComponent';
import { TagStatusComponent } from './pages/RFIDFrontend/FixedReader/tag-status/tag-status.component';
import { TagNewComponent } from './pages/RFIDFrontend/FixedReader/tag-new/tag-new.component';
import { TagInuseComponent } from './pages/RFIDFrontend/FixedReader/tag-inuse/tag-inuse.component';
import { TagLastlocationComponent } from './pages/RFIDFrontend/FixedReader/tag-lastlocation/tag-lastlocation.component';
import { roleGuard } from './services/role.guard';
import { Roles } from './classes/roles.model';
import { UnauthorizedPageComponent } from './pages/unauthorized-page/unauthorized-page.component';
import { authGuard } from './services/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'logout', component:LogoutComponent },
    {path: 'login', component:LoginComponent},
    {path: 'assets', component:AssetsComponent, canActivate:[authGuard]},
    {path: 'e-gov', component:EGovComponent, canActivate:[authGuard]},
    {path: 'e-govDatabase',component:EGovDatabaseComponent,canActivate:[authGuard]},
    {path: 'automations', component:AutomationsComponent,canActivate:[authGuard]},
    {path: 'control-zones', component:ControlZonesComponent,canActivate:[authGuard]},
    {path: 'all-devices', component:AllDevicesComponent,canActivate:[authGuard]},
    {path: 'create-zone',component:CreateZoneComponent,canActivate:[authGuard]},
    {path: 'deviceDetails',component:AllDeviceDetailsComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path: 'detailed-report',component:ReportsDetailsComponent,canActivate:[authGuard]},
    {path: 'report',component:ReportsComponent,canActivate:[authGuard]},
    {path: 'automations-details',component:AutomationsDetailsComponent,canActivate:[authGuard]},
    {path: 'reports', component:ReportsComponent,canActivate:[authGuard]},
    {path: 'control-zone-details',component:ControlZoneDetailsComponent,canActivate:[authGuard]},
    {path: 'last-location',component:DeviceLastlocationComponent,canActivate:[authGuard]},
    {path: 'register',component:RegisterComponent,canActivate:[authGuard]},
    {path:'AllReports',component:DatabaseReportsComponent,canActivate:[authGuard]},
    {path:'DeviceDaliyReport',component:DeviceDaliyReportComponent,canActivate:[authGuard]},
    {path: 'UnAuthorizedPage', component:UnauthorizedPageComponent,canActivate:[authGuard]},
//-----------------------------------------------------------------------------------
//RFID Tags
    {path:'all-tags',component:AllTagsComponent,canActivate:[authGuard]},
    {path:'create-tag',component:CreateTagComponent,canActivate:[authGuard]},
    {path:'update-tag/:tagid',component:UpdateTagComponent,canActivate:[authGuard]},
    {path:'Existing-Tags',component:ExistingTagsComponent,canActivate:[authGuard]},
    {path:'Missing-Tags',component:MissingtagsComponent,canActivate:[authGuard]},
    {path:'RFIDGate',component:RFIDGateCurrentComponent,canActivate:[authGuard]},
    {path:'RFIDGateReport',component:RFIDGateReportComponent,canActivate:[authGuard]},
    {path:'RFIDRegister',component:RFIDRegisterComponent,canActivate:[authGuard]},
    {path:'tag_area/:name',component:ReaderComponent,canActivate:[authGuard]},
    {path:'status',component:TagStatusComponent,canActivate:[authGuard]},
    {path:'newTag',component:TagNewComponent,canActivate:[authGuard]},
    {path:'Inuse',component:TagInuseComponent,canActivate:[authGuard]},
    {path:'lastlocation/:name',component:TagLastlocationComponent,canActivate:[authGuard]},

//----------------------------------------------------------------------------------------
//Administrator
    {path:'administration',component:AdministrationComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'DataTable',component:TagDataTableComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'category-tag',component:CategoryTagComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'condition-tag',component:ConditionTagComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'brand-tag',component:BrandTagComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'createCategory',component:TagCreateDataTableComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'location-tag',component:LocationTagComponent, canActivate: [roleGuard], data: { expectedRole: 1 }},
    {path:'update/:type/:id', component: DataTablesUpdateComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    {path:'disposal-tag',component:DisposalTagComponent, canActivate: [roleGuard], data: { expectedRole: 'ADMIN' }},
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
