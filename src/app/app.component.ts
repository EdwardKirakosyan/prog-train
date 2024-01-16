import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prog-train'

  toggle: boolean = true

  onToggle() {
    this.toggle = !this.toggle
  }

  inputText: string = ''

  OnSubmit(inp: HTMLInputElement) {
    this.inputText = inp.value
  }
}
