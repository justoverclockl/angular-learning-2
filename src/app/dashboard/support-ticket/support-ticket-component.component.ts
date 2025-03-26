import { Component } from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import type {Ticket} from "./types";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [
    DashboardItemComponent,
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './support-ticket-component.component.html',
  styleUrl: './support-ticket-component.component.css'
})
export class SupportTicketComponentComponent {
  tickets: Ticket[] = []

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket)
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed',
        }
      }
      return ticket
    })
  }
}
