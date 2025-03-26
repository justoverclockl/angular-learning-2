import {Component, input, output, signal} from '@angular/core';
import type {Ticket} from "../types";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>()
  closeTicket = output()
  detailsVisible = signal<boolean>(false)

  onToggleDetails() {
    this.detailsVisible.update(wasVisible => !wasVisible)
  }

  onMarkAsCompleted() {
    this.closeTicket.emit()
  }
}
