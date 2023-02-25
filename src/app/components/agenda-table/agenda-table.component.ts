import { Component } from '@angular/core';
import { Agenda } from '../../model/agenda.model';

@Component({
  selector: 'app-agenda-table',
  templateUrl: './agenda-table.component.html',
  styleUrls: ['./agenda-table.component.scss']
})
export class AgendaTableComponent {
  dataSource: Agenda[] = [];
}
