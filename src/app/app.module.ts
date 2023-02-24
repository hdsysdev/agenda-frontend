import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {MenuModule} from "primeng/menu";
import { AgendaTableComponent } from './agenda-table/agenda-table.component';
import { RouterModule, Routes } from '@angular/router';
import {TreeTableModule} from 'primeng/treetable';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    AgendaTableComponent,
    HomeComponent,
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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
