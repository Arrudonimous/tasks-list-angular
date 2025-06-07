import { Component, Input as InputCore } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
  standalone: true
})
export class Input {
  @InputCore() placeholder!: string;
}
