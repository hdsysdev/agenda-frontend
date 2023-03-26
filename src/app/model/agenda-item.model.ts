export class AgendaItem {
  id: number;
  title: string;
  date: Date;
  time: Date;
  status: string;

  constructor(id: number, title: string, date: Date, time: Date, status: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.status = status;
  }
}
