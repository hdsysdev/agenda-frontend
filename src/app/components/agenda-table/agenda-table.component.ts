import { Component } from '@angular/core';
import {AgendaItem} from "../../model/agenda-item.model";
import {ConfirmationService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-agenda-table',
  templateUrl: './agenda-table.component.html',
  styleUrls: ['./agenda-table.component.scss'],
})
export class AgendaTableComponent {
  agendas: AgendaItem[] = [
    new AgendaItem(1, 'Meeting 1', new Date(2023, 2, 26), new Date(0, 0, 0, 10, 0), 'Approved'),
    new AgendaItem(2, 'Meeting 2', new Date(2023, 2, 27), new Date(0, 0, 0, 14, 0), 'Pending'),
  ];
  selectedAgendas: AgendaItem[] = [];
  displayAddDialog: boolean = false;

  statuses: any[] = [
    { label: 'Approved', value: 'Approved' },
    { label: 'Pending', value: 'Pending' },
  ];

  agendaForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
  });

  constructor(private confirmationService: ConfirmationService) {}

  showAddDialog() {
    this.displayAddDialog = true;
  }

  showDeleteDialog() {
    this.confirmationService.confirm({
      header: 'Delete Agendas',
      icon: 'pi pi-exclamation-triangle',
      message: 'Are you sure you want to delete the selected agendas?',
      accept: () => {
        this.deleteAgendas();
      },
    });
  }

  addAgenda() {
    const newAgenda = new AgendaItem(
      this.agendas.length + 1,
      this.agendaForm.value.title!,
      this.agendaForm.value.date!,
      this.agendaForm.value.time!,
      this.agendaForm.value.status!
    );
    this.agendas.push(newAgenda);
    this.agendaForm.reset();
    this.displayAddDialog = false;
  }

  cancelAddAgenda() {
    this.agendaForm.reset();
    this.displayAddDialog = false;
  }

  deleteAgendas() {
    // Delete selected agendas logic here
    // For example, remove selected agendas from the agendas array:
    this.agendas = this.agendas.filter((agenda) => !this.selectedAgendas.includes(agenda));
    this.selectedAgendas = [];
  }
}

