import { Component, Input as InputCore, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class Input {
  @InputCore() value: string = '';
  @InputCore() placeholder: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement | null;
    this.valueChange.emit(input?.value ?? '');
  }
}
