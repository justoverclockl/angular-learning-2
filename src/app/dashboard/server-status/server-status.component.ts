import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'offline' | 'online' | 'unknown' = 'offline';
  private destroyRef: DestroyRef = inject(DestroyRef)


  ngOnInit() {
   const interval = setInterval(() => {
      const randomValue = Math.random()
      if (randomValue < 0.5) {
        this.currentStatus = 'online'
      } else if (randomValue < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
}
