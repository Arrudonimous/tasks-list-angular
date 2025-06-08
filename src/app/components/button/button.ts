import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true
})
export class Button {
  @Input() buttonText!: string;
  @Input() showIcon!: boolean;
}
