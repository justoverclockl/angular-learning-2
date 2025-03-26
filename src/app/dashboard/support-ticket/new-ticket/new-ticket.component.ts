import {AfterViewInit, Component, ElementRef, OnInit, output, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";
import {Ticket} from "../types";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  add = output<{ title: string, text: string }>()
  private form = viewChild<ElementRef<HTMLFormElement>>('form')

  ngOnInit() {
    console.log('NG ON INIT')
    console.log(this.form()?.nativeElement)
  }

  ngAfterViewInit() {
    // means that is guaranteed that u can access element within viewChild if use decorators
    // otherwise with signal u can access in nGonInit
    console.log('AFTER VIEW INIT')
    console.log(this.form()?.nativeElement)
  }

  onSubmit(title: string, text: string) {
    this.add.emit({ title, text })
    this.form()?.nativeElement.reset()
  }
}
