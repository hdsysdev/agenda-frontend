import {AgendaItem} from "./agenda-item.model";

export interface Agenda {
    id: string,
    title: string,
    body: string,
    items: AgendaItem[],
    time: string
}
