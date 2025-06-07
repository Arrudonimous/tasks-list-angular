import { Component, Input as InputCore } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true
})
export class Button {
  @InputCore() buttonText!: string;
  @InputCore() showIcon!: boolean;
}
