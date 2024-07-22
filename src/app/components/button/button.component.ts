import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button'

  get colors() {
    return {
      'bg-blue-600': this.buttonType === "submit",
      'text-white': this.buttonType === "submit" || this.buttonType === "reset",
      'border-[1px]': this.buttonType === "button",
      'bg-white': this.buttonType === "button",
      'border-gray-400': this.buttonType === "button",
      'bg-pink-500': this.buttonType === "reset",
    }
  }

}
