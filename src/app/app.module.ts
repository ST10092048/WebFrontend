import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/Access-control/login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './components/common/left-menu/left-menu.component';
import { TopMenuComponent } from './components/common/top-menu/top-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { AngularPaginatorModule } from 'angular-paginator';
import { ThreeLayerLayoutComponent } from './pages/layouts/three-layer-layout/three-layer-layout.component';
import { TwoLayerLayoutComponent } from './pages/layouts/two-layer-layout/two-layer-layout.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { EGovComponent } from './pages/EGOVdata/e-gov/e-gov.component';
import { EGovDatabaseComponent } from './pages/EGOVdata/egov-database/egov-database.component';
import { AutomationsComponent } from './pages/automationComponents/automations/automations.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlZonesComponent } from './pages/controlZoneComponents/control-zones/control-zones.component';
import { AllDevicesComponent } from './pages/device/all-device-view/all-devices/all-devices.component';
import { CreateZoneComponent } from './pages/controlZoneComponents/create-zone/create-zone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider'; 
import { AllDeviceDetailsComponent } from './pages/device/all-device-details/all-device-details.component';
import { MatListModule } from '@angular/material/list';
import { ReportsComponent } from './pages/device/device-reports/reports/reports.component';
import { AllDeviceMapComponent } from './pages/device/all-device-map/all-device-map.component';
import { DeviceLastlocationComponent } from './pages/device/device-details/device-lastlocation/device-lastlocation.component';
import { ControlZoneDetailsComponent } from './pages/controlZoneComponents/control-zone-details/control-zone-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ControlZoneMapComponent } from './pages/controlZoneComponents/control-zone-map/control-zone-map.component';
import { AutomationsDetailsComponent } from './pages/automationComponents/automations-details/automations-details.component';
import { ReportsDetailsComponent } from './pages/device/device-reports/reports-details/reports-details.component';
import { jsPDF } from 'jspdf';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DeviceHardwareComponent } from './pages/device/device-details/device-hardware/device-hardware.component';
import { AlertComponent } from './pages/deviceActions/alert/alert.component';
import { AlarmComponent } from './pages/deviceActions/alarm/alarm.component';
import { LockComponent } from './pages/deviceActions/lock/lock.component';
import { ActionsComponent } from './pages/deviceActions/actions/actions.component';
import { AllDeviceCardComponent } from './pages/device/all-device-view/all-device-card/all-device-card.component';
import { RegisterComponent } from './pages/Access-control/register/register.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationsComponent } from './pages/deviceActions/notifications/notifications.component';
import { DatabaseReportsComponent } from './pages/device/device-reports/database-reports/database-reports.component';
import { AllTagsComponent } from './pages/RFIDFrontend/tags/all-tags/all-tags.component';
import { TagThreeLayerLayoutComponent } from './pages/RFIDFrontend/layouts/tag-three-layer-layout/tag-three-layer-layout.component';
import { TagLeftMenuComponent } from './pages/RFIDFrontend/layouts/tag-left-menu/tag-left-menu.component';
import { CreateTagComponent } from './pages/RFIDFrontend/tags/create-tag/create-tag.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateTagComponent } from './pages/RFIDFrontend/tags/update-tag/update-tag.component';
import { TagDataTableComponent } from './pages/RFIDFrontend/tags/tag-data-table/tag-data-table.component';
import { TagCreateDataTableComponent } from './pages/RFIDFrontend/tags/tag-create-data-table/tag-create-data-table.component';
import { CategoryTagComponent } from './pages/RFIDFrontend/tags/category-tag/category-tag.component';
import { ConditionTagComponent } from './pages/RFIDFrontend/tags/condition-tag/condition-tag.component';
import { BrandTagComponent } from './pages/RFIDFrontend/tags/brand-tag/brand-tag.component';
import { LocationTagComponent } from './pages/RFIDFrontend/tags/location-tag/location-tag.component';
import { DataTablesUpdateComponent } from './pages/RFIDFrontend/tags/data-tables-update/data-tables-update.component';
import { DisposalTagComponent } from './pages/RFIDFrontend/tags/disposal-tag/disposal-tag.component';
import { ExistingTagsComponent } from './pages/RFIDFrontend/tags/existing-tags/existing-tags.component';
import { MissingtagsComponent } from './pages/RFIDFrontend/tags/missingtags/missingtags.component';
import { RFIDGateCurrentComponent } from './pages/RFIDFrontend/Gates/rfidgate-current/rfidgate-current.component';
import { RFIDGateReportComponent } from './pages/RFIDFrontend/Gates/rfidgate-report/rfidgate-report.component';
import { RFIDRegisterComponent } from './pages/RFIDFrontend/Gates/rfidregister/rfidregister.component';
import { DeviceDaliyReportComponent } from './pages/device/device-daliy-report/device-daliy-report.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { TreeModule } from 'primeng/tree';
import {MatTreeModule} from '@angular/material/tree';
import { TreeViewComponent } from './components/common/tree-view/tree-view.component';
import { AdministrationComponent } from './pages/Admin-panel/administration/administration.component';
import { AdminThreeLayerLayoutComponent } from './pages/Admin-panel/admin-three-layer-layout/admin-three-layer-layout.component';
import { AdminLeftMenuComponent } from './pages/Admin-panel/admin-left-menu/admin-left-menu.component';
import { ReaderComponent } from './pages/RFIDFrontend/FixedReader/reader/ReaderComponent';
import { TagStatusComponent } from './pages/RFIDFrontend/FixedReader/tag-status/tag-status.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TagNewComponent } from './pages/RFIDFrontend/FixedReader/tag-new/tag-new.component';
import { TagInuseComponent } from './pages/RFIDFrontend/FixedReader/tag-inuse/tag-inuse.component';
import { GraphModule } from './pages/RFIDFrontend/FixedReader/stacked-chart/graph.module';
import { TagLastlocationComponent } from './pages/RFIDFrontend/FixedReader/tag-lastlocation/tag-lastlocation.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AccessDialogComponent } from './components/access-dialog/access-dialog.component';
import { UnauthorizedPageComponent } from './pages/unauthorized-page/unauthorized-page.component';
import { UrlService } from './services/url.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftMenuComponent,
    TopMenuComponent,
    LoginComponent,
    ThreeLayerLayoutComponent,
    TwoLayerLayoutComponent,
    AssetsComponent,
    EGovComponent,
    EGovDatabaseComponent,
    AutomationsComponent,
    DataTableComponent,
    ControlZonesComponent,
    AllDevicesComponent,
    CreateZoneComponent,
    AllDeviceDetailsComponent,
    AllDeviceMapComponent,
    DeviceLastlocationComponent,
    ControlZoneDetailsComponent,
    ControlZoneMapComponent,
    ReportsComponent,
    AllDeviceMapComponent,
    AutomationsDetailsComponent,
    ReportsDetailsComponent,
    DeviceHardwareComponent,
    AlertComponent,
    AlarmComponent,
    LockComponent,
    ActionsComponent,
    AllDeviceCardComponent,
    RegisterComponent,
    NotificationsComponent,
    DatabaseReportsComponent,
    AllTagsComponent,
    TagThreeLayerLayoutComponent,
    TagLeftMenuComponent,
    CreateTagComponent,
    UpdateTagComponent,
    TagDataTableComponent,
    TagCreateDataTableComponent,
    CategoryTagComponent,
    ConditionTagComponent,
    BrandTagComponent,
    LocationTagComponent,
    DataTablesUpdateComponent,
    DisposalTagComponent,
    ExistingTagsComponent,
    MissingtagsComponent,
    RFIDGateCurrentComponent,
    RFIDGateReportComponent,
    RFIDRegisterComponent,
    DeviceDaliyReportComponent,
    TreeViewComponent,
    AdministrationComponent,
    AdminThreeLayerLayoutComponent,
    AdminLeftMenuComponent,
    ReaderComponent,
    TagStatusComponent,
    TagNewComponent,
    TagInuseComponent,
    TagLastlocationComponent,
    AccessDialogComponent,
    UnauthorizedPageComponent,
    ProgressBarComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatTreeModule,
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    AngularPaginatorModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxPaginationModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
    MatMenuModule,
    TreeModule,
    MatTabsModule,
    CanvasJSAngularChartsModule,
    GraphModule,
    DialogModule,
    ButtonModule
    
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
