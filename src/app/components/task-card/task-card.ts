import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {
  @Input() task: { description: string; id: number; done: boolean } = {
    description: '',
    id: 0,
    done: false
  };
  @Input() removeTask!: (id: number) => void;

}
