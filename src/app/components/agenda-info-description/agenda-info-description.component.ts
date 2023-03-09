import { Agenda } from './../../model/agenda.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agenda-info-description',
  templateUrl: './agenda-info-description.component.html',
  styleUrls: ['./agenda-info-description.component.scss']
})
export class AgendaInfoDescriptionComponent {
  @Input() agenda?: Agenda;
}
