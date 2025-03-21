import {Component, ContentChild, contentChild, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>()
  private el = inject(ElementRef)
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  onClick() {
    console.log('clicked!', this.el.nativeElement.innerText)
    console.log(this.control())
  }
}
