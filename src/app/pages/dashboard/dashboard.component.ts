import { Component } from '@angular/core';
import {AgendaItem} from "../../model/agenda-item.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  agendas: AgendaItem[] = [
    new AgendaItem(1, 'Meeting 1', new Date(2023, 2, 26), new Date(0, 0, 0, 10, 0), 'Approved'),
    new AgendaItem(2, 'Meeting 2', new Date(2023, 2, 27), new Date(0, 0, 0, 14, 0), 'Pending'),
  ];

  addAgendaVisible = false;
  newAgenda = new AgendaItem(1, 'Meeting 1', new Date(2023, 2, 26), new Date(0, 0, 0, 10, 0), 'Approved');

  statuses = [
    { label: 'Approved', value: 'Approved' },
    { label: 'Pending', value: 'Pending' },
  ];

  showAddAgendaDialog() {
    this.addAgendaVisible = true;
  }

  addAgenda() {
    this.agendas.push({ ...this.newAgenda });
    this.newAgenda = new AgendaItem(
      this.agendas.length + 1,
      'Meeting ' + (this.agendas.length + 1),
      new Date(2023, 2, 26),
      new Date(0, 0, 0, 10, 0),
      'Approved'
    );
    this.addAgendaVisible = false;
  }

  cancelAddAgenda() {
    this.addAgendaVisible = false;
  }

  deleteAgenda(agenda: AgendaItem) {
    this.agendas = this.agendas.filter(a => a !== agenda);
  }
}
