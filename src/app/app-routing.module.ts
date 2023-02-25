import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AgendaViewerPageComponent} from "./pages/agenda-viewer-page/agenda-viewer-page.component";

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-agendas', component: AgendaViewerPageComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
