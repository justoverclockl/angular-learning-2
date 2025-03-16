import {Component, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
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
  currentStatus = signal<'offline' | 'online' | 'unknown'>('offline');
  private destroyRef: DestroyRef = inject(DestroyRef)

  constructor() {
    // effect make a subscription on signals when changes
    // so we can run function on state change
    effect((onCleanup) => {
      console.log(this.currentStatus())

      onCleanup(() => {
        // cleanup here
      })
    })
  }


  ngOnInit() {
   const interval = setInterval(() => {
      const randomValue = Math.random()
      if (randomValue < 0.5) {
        this.currentStatus.set('online')
      } else if (randomValue < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
}
