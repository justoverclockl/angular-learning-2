import {Component, input} from '@angular/core';
import type {ImagePropsType} from "./types";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  image = input.required<ImagePropsType>()
  title = input.required<string>()
}
