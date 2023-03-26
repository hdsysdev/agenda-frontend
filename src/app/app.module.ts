import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from "primeng/button";
import { ChipModule } from "primeng/chip";
import { SidebarModule } from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {MenuModule} from "primeng/menu";
import { AgendaTableComponent } from './components/agenda-table/agenda-table.component';
import {TreeTableModule} from 'primeng/treetable';
import { AgendaViewerPageComponent } from './pages/agenda-viewer-page/agenda-viewer-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AgendaInfoDescriptionComponent } from './components/agenda-info-description/agenda-info-description.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    AgendaTableComponent,
    HomeComponent,
    AgendaViewerPageComponent,
    DashboardComponent,
    SideNavComponent,
    AgendaInfoDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    MenuModule,
    TreeTableModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    DialogModule,
    FormsModule,
    ChipModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
