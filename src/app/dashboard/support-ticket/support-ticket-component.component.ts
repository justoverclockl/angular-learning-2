import { Component } from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";
import {NewTicketComponent} from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [
    DashboardItemComponent,
    NewTicketComponent
  ],
  templateUrl: './support-ticket-component.component.html',
  styleUrl: './support-ticket-component.component.css'
})
export class SupportTicketComponentComponent {

}
