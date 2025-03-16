import {AfterViewInit, Component, ElementRef, OnInit, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

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
    console.log(title, text)
    this.form()?.nativeElement.reset()
  }
}
