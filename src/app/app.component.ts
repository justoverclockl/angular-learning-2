import { Component } from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TrafficComponentComponent} from "./dashboard/traffic/traffic-component.component";
import {SupportTicketComponentComponent} from "./dashboard/support-ticket/support-ticket-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavigationComponent,
    DashboardComponent,
    ServerStatusComponent,
    TrafficComponentComponent,
    SupportTicketComponentComponent
  ]
})
export class AppComponent {

}
