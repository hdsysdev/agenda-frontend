import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agenda-frontend';
  sideBarVisible = true;

  sideBarContent: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Home', icon: 'pi pi-fw pi-home'},
  ]

  toggleSideBar() {

    console.log("toggleSideBar");
    this.sideBarVisible = !this.sideBarVisible;
  }
}
